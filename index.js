const Koa = require('koa');
const Router = require('koa-router');

var googlePlay = require('google-play-scraper');
var appleStore = require('app-store-scraper');

const app = new Koa();
const router = new Router();

router.get('/google/:appId', async (ctx, next) => {
    const response = await googlePlay.app({appId: ctx.params.appId});
    ctx.body = response;
});

router.get('/apple/:appId', async (ctx, next) => {
    const response = await appleStore.app({appId: ctx.params.appId});
    ctx.body = response;
});

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(80);