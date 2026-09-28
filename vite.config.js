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

function syncProxyPlugin() {
  return {
    name: 'sync-proxy-plugin',
    configureServer(server) {
      server.middlewares.use('/api/sync', async (req, res) => {
        try {
          const syncModule = await import('./api/sync.js');
          const handler = syncModule.default;
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            if (body) {
              try {
                req.body = JSON.parse(body);
              } catch {
                req.body = body;
              }
            }
            await handler(req, res);
          });
        } catch (e) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: e.message }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), ttsProxyPlugin(), syncProxyPlugin()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'curriculum-data',
              test: /[\\/]src[\\/]data[\\/]curriculumGrade[1-5]\.js$/,
            },
            {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              maxSize: 250000,
            },
          ],
        },
      },
    },
  },
})

