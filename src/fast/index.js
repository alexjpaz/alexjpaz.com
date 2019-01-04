const request = require('superagent');

module.exports = (app, options) => {
  app.get('/fast', async (req, res) => {
    const url = 'https://fa2yu62thb.execute-api.us-east-1.amazonaws.com/production/sanic';
    const rsp = await request.get(url);

    const imageUrl = new URL(rsp.body.text);

    if(req.query.printUrl) {
      return res.send(imageUrl);
    }

    if(req.query.redirect) {
      return res.redirect(307, imageUrl);
    }

    if(req.query.proxy) {
      request.get(imageUrl).pipe(res);
      return;
    }

    return res.send(`
    <html>
      <img src='${imageUrl}' />
    </html>
    `);
  });
};
