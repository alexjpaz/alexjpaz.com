module.exports = (app) => {
  app.get('/wishlist', (req, res) => {
    res.redirect('https://www.amazon.com/gp/registry/wishlist/39HDNC1ODLVA4');
  });

  app.get('/prathu', (req, res) => {
    res.redirect('http://prathu.herokuapp.com');
  });

  app.get('/be-my-friend', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=1Uy8D_KsdyA');
  });

  app.get('/nani', (req, res) => {
    res.redirect('https://www.youtube.com/embed/vxKBHX9Datw?start=6&autoplay=1')
  });
};
