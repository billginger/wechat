global.dir = __dirname;

const path = require('path');
const Koa = require('koa');
const static = require('koa-static');

const config = require('./config.js');
const env = process.env.NODE_ENV || 'local';
const cfg = config[env];
const normalizePort = val => (parseInt(val));
const port = normalizePort(process.env.PORT || cfg.port || 3000);

const router = require('./routes');
const app = new Koa();
app.use(static(path.join(global.dir, 'static')));
app.use(router.routes()).use(router.allowedMethods());
app.listen(port);

console.log('WeChat HTTP is starting at port ' + port);
