import makeHttpRequest from './makeHttpRequest';

function validateMessage(message) {
  if (!message) {
    throw new Error('MSG91 : message is not provided.');
  }
  return message;
}

function modifyCallbackIfNull(callback) {
  return callback || function () {};
}

function isUnicodeString(str) {
  for (let i = 0, n = str.length; i < n; i += 1) {
    if (str.charCodeAt(i) > 255) { return true; }
  }
  return false;
}

function validateMobileNos(mobileNos) {
  let mobileNumbers = mobileNos;

  if (!mobileNumbers) {
    throw new Error('MSG91 : Mobile No is not provided.');
  }

  if (mobileNumbers instanceof Array) {
    mobileNumbers = mobileNumbers.join(',');
  }

  return mobileNumbers;
}


module.exports = {
  validateMessage,
  modifyCallbackIfNull,
  isUnicodeString,
  makeHttpRequest,
  validateMobileNos,
};
