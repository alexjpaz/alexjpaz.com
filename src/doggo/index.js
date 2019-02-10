module.exports = (app, options) => {
  const images = require('./images');

  function getRandomImage() {
   return images[Math.floor(Math.random()*images.length)];
  }

  function getRandomIndex() {
    return Math.floor(Math.random()*images.length);
  }

  app.get('/doggo', (req, res) => {
    let i = getRandomIndex();

    if(req.query && req.query.i) {
      i = req.query.i;
    } else {
      return res.redirect(`/doggo?i=${i}`);
    }

    const imageUrl = images[i];

    return res.send(`
    <html>
      <img src='${imageUrl}' />
    </html>
    `);

    res.redirect(getRandomImage())
  });

};
