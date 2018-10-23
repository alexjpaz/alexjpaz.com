module.exports = (app, options) => {
  const images = require('./images');

  function getRandomImage() {
   return images[Math.floor(Math.random()*images.length)];
  }

  app.get('/doggo', (req, res) => {
    res.redirect(getRandomImage())
  });
};
