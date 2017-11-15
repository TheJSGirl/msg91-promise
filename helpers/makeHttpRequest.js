const http = require('http');

const makeHttpRequest = (options, postData, callback) => {
  let data = '';
  if (!options) {
    throw new Error('MSG91 : option object is not provided.');
  }
  const req = http.request(options, (res) => {
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      callback(null, data);
    });
  });

  req.on('error', (e) => {
    callback(e);
  });

  if (postData != null) {
    req.write(postData);
  }

  req.end();
};

module.exports = makeHttpRequest;
