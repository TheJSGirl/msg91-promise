/**
 *
 * @param authKey
 * @param senderId
 * @param route : Value can be 1 for Promotional Router or 4 for Transactional Route
 */
module.exports = function MSG91(authKey, senderId, route) {
  if (!authKey) {
    throw new Error('MSG91 Authorization Key not provided.');
  }

  if (!senderId) {
    throw new Error('MSG91 Sender Id is not provided.');
  }

  if (!route) {
    throw new Error('MSG91 router Id is not provided.');
  }

  this.send = function (mobileNos, message, callback) {
    callback = modifyCallbackIfNull(callback);

    mobileNos = validateMobileNos(mobileNos);

    message = validateMessage(message);

    const isUnicode = isUnicodeString(message);

    // for fixing this issue - http://help.msg91.com/article/59-problem-with-plus-sign-api-send-sms
    // EncodeUriComponent Doesn't work on ! * ( ) . _ - ' ~ `
    const specialChars = ['+', '&', '#', '%', '@', '/', ';', '=', '?', '^', '|'];

    if (specialChars.some(v => message.indexOf(v) >= 0)) {
      // if there is at least one special character present in message string
      message = encodeURIComponent(encodeURIComponent(message));
    }

    let postData = `authkey=${authKey}&sender=${senderId}&mobiles=${mobileNos }&message=${message}&route=${route}`;

    if (isUnicode) {
      postData += '&unicode=1';
    }

    const options = {
      hostname: 'control.msg91.com',
      port: 80,
      path: '/api/sendhttp.php',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length,
      },
    };

    makeHttpRequest(options, postData, (err, data) => {
      callback(err, data);
    });
  };

  this.getBalance = function (customRoute, callback) {
    if (arguments.length == 1) {
      callback = customRoute;
      customRoute = null;
    }

    callback = modifyCallbackIfNull(callback);

    const currentRoute = customRoute || route;

    const options = {
      hostname: 'control.msg91.com',
      port: 80,
      path: `/api/balance.php?authkey=${authKey}&type=${currentRoute}`,
      method: 'GET',
    };

    makeHttpRequest(options, null, (err, data) => {
      callback(err, data);
    });
  };

  return this;
};

function validateMobileNos(mobileNos) {
  if (mobileNos == null || mobileNos == '') {
    throw new Error('MSG91 : Mobile No is not provided.');
  }

  if (mobileNos instanceof Array) {
    mobileNos = mobileNos.join(',');
  }

  return mobileNos;
}

function validateMessage(message) {
  if (message == null || message == '') {
    throw new Error('MSG91 : message is not provided.');
  }

  return message;
}

function modifyCallbackIfNull(callback) {
  return callback || function () {};
}

function isUnicodeString(str) {
  for (let i = 0, n = str.length; i < n; i++) {
    if (str.charCodeAt(i) > 255) { return true; }
  }
  return false;
}

function makeHttpRequest(options, postData, callback) {
  const http = require('http');
  let data = '';
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
}
