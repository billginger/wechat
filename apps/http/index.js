const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const config = require('./config');

const host = config.host;
if (!host || !Array.isArray(host)) {
	return console.error('Incorrect config, app exited!');
}

let data = config.data;
if (!data) {
	data = '<h1>Node.js</h1><p>Hello World!</p>';
}

http.createServer((req, res) => {
	for (let item of host) {
		if (item.domain && item.proxy && item.domain.indexOf(req.headers.host) >= 0) {
			return proxy.web(req, res, { target: item.proxy });
		}
	}
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(data);
}).listen(80);

console.log('HTTP server is running.');