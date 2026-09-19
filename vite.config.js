import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import https from 'node:https'

function ttsProxyPlugin() {
  return {
    name: 'tts-proxy-plugin',
    configureServer(server) {
      server.middlewares.use('/api/tts', (req, res) => {
        try {
          const url = new URL(req.url, 'http://localhost');
          const text = url.searchParams.get('text') || '';
          if (!text) {
            res.statusCode = 400;
            return res.end('Missing text parameter');
          }

          const encoded = encodeURIComponent(text.substring(0, 200));
          const googleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;

          const gReq = https.get(
            googleUrl,
            {
              headers: {
                'User-Agent':
                  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                Accept: '*/*',
              },
            },
            (gRes) => {
              res.writeHead(gRes.statusCode || 200, {
                'Content-Type': 'audio/mpeg',
                'Cache-Control': 'public, max-age=86400',
                'Access-Control-Allow-Origin': '*',
              });
              gRes.pipe(res);
            }
          );

          gReq.on('error', (err) => {
            console.error('TTS proxy error:', err.message);
            res.statusCode = 500;
            res.end('TTS proxy error');
          });
        } catch (e) {
          res.statusCode = 500;
          res.end(e.message);
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ttsProxyPlugin()],
})

