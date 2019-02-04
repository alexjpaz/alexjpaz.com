
const publicPath = "/public";

module.exports = {
  mode: "development",
  output: {
    publicPath,
  },
  entry: {
    "and-his-name-is": "./src/and-his-name-is/app.js"
  },
  devServer: {
    publicPath,
    after: (app) => {
      require('./src/and-his-name-is')(app);
    }
  }
};
