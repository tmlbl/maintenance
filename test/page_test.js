var request = require('request');

describe('Maintenance page', function () {
  it('Should respond 200', function (done) {
    request.get('http://localhost:3030', function (err, res) {
      if (err) {
        throw new Error('There was an error making the request ' + err);
      }
      if (res.statusCode !== 200) {
        throw new Error('It responded ' + res.statusCode + ' instead of 200');
      }
      done();
    });
  });
  it('Should serve some html', function (done) {
    request.get('http://localhost:3030', function (err, res) {
      if (res.body.length < 10) {
        throw new Error('Response was empty');
      }
      if (res.body.indexOf('<body>') === -1) {
        throw new Error('This content is not html');
      }
      done();
    });
  });
});
