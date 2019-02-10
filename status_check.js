const assert = require('assert');
const https = require('https');

const daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;

  // Convert back to days and return
  return Math.round(difference_ms/one_day);
};

const run = async () => {
  var https = require('https');

  var options = {
    host: 'alexjpaz.com',
    method: 'get',
    path: '/'
  };

  await new Promise((resolve, reject) => {
    var req = https.request(options, function (res) {
        const cert = res.socket.getPeerCertificate();

        const valid_to = new Date(cert.valid_to);
        const now = new Date();

        try {
          assert(daysBetween(now, valid_to) > 30);
          resolve();
        } catch(e) {
          reject(e);
        }
      });

    req.end();
  });
};

exports.handler = async () => {
  try {
    await run();
  } catch(e) {
    throw e;
    // do some alerting here
  }
};
