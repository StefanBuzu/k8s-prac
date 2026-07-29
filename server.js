const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200);
    return res.end('ok');
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ version: 'v3' }));
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
