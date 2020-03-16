const Mocha = require('mocha');

const mocha = new Mocha();

mocha.addFile(require.resolve('./status-check.test.js'));

const r = mocha.run(() => {
  console.log(r);
});

exports.handler = function(event, context, callback) {
  let timestamp = new Date();
  const runner = mocha.run((failures) => {
    callback(null, {
      stats: runner.stat,
      statusCode: failures ? 200 : 500,
      body: {
        timestamp,
        stats: runner.stats
      }
    });
  });
}
