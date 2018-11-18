module.exports = (app) => {
  app.get('/wishlist', (req, res) => {
    res.redirect('https://www.amazon.com/gp/registry/wishlist/39HDNC1ODLVA4');
  });

  app.get('/prathu', (req, res) => {
    res.redirect('http://prathu.herokuapp.com');
  });

};
