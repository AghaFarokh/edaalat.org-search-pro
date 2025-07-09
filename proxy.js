const express = require('express');
const fetch = require('node-fetch');
const { SocksProxyAgent } = require('socks-proxy-agent');
const app = express();
const PORT = 3000;

// Usage: node proxy.js [socks_proxy_host:port]
// Example: node proxy.js 127.0.0.1:10808
let agent = undefined;
let proxyInfo = 'Without proxy';
if (process.argv[2]) {
  agent = new SocksProxyAgent(`socks5h://${process.argv[2]}`);
  proxyInfo = `Active proxy: socks5h://${process.argv[2]}`;
}

app.get('/api/cases', async (req, res) => {
  const { q, page } = req.query;
  console.log(`[${new Date().toISOString()}] Incoming request: /api/cases?q=${q}&page=${page} (${proxyInfo})`);
  if (!q || !page) {
    console.log('Missing q or page parameter');
    return res.status(400).json({ error: 'Missing q or page parameter' });
  }
  const url = `https://edaalat.org/request/cases?q=${encodeURIComponent(q)}&page=${page}`;
  console.log(`Fetching: ${url}`);
  try {
    const fetchOptions = {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    };
    if (agent) fetchOptions.agent = agent;
    const response = await fetch(url, fetchOptions);
    console.log(`Response status from edaalat.org: ${response.status}`);
    const data = await response.json();
    res.set('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (err) {
    console.error('Error fetching from edaalat.org:', err);
    res.status(500).json({ error: 'Failed to fetch data', details: err.message });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
  } else {
    console.log(`Proxy server running at http://localhost:${PORT}`);
    console.log(proxyInfo);
    if (!agent) {
      console.log('برای استفاده از پراکسی، دستور زیر را اجرا کنید:');
      console.log('node proxy.js 127.0.0.1:10808');
    }
  }
});