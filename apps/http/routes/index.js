const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const router = new Router();

router.get('/', ctx => {
	ctx.type = 'html';
	ctx.body = fs.readFileSync(path.join(global.dir, 'views', 'index.html'));
});

router.get('/api/third/wechat', ctx => {
	const echostr = ctx.query.echostr;
	ctx.body = echostr;
});

module.exports = router;
