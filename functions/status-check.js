const Mocha = require('mocha');

const mocha = new Mocha();

mocha.addFile(require.resolve('./status-check.test.js'));

mocha.run();

exports.handler = function(event, context, callback) {
  const runner = mocha.run((failures) => {
    console.log(runner);

    callback(null, {
      statusCode: failures ? 200 : 500,
      body: "Hello, World"
    });
  });
}
