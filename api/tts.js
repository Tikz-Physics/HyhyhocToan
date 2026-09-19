import https from 'node:https';

export default function handler(req, res) {
  const text = req.query.text || '';
  if (!text) {
    res.status(400).send('Missing text parameter');
    return;
  }

  const encoded = encodeURIComponent(text.substring(0, 180));
  const googleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;

  https.get(
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
  ).on('error', (err) => {
    res.status(500).send(err.message);
  });
}
