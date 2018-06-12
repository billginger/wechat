global.dir = __dirname;

const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const log4js = require('log4js');

const config = require('./config.js');
const env = process.env.NODE_ENV || 'local';
const cfg = config[env];

const log = log4js.getLogger();
log.level = 'debug';

const normalizePort = val => (parseInt(val));
const port = normalizePort(process.env.PORT || cfg.port || 3000);

const router = require('./routes');
const app = new Koa();
app.use(static(path.join(global.dir, 'static')));
app.use(router.routes()).use(router.allowedMethods());
app.listen(port);

log.info('WeChat HTTP is starting at port ' + port);
