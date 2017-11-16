/**
 * Created by hiren on 26/11/15.
 * Modified by Ashok Dey <github.com/ashokdey> on 16/11/2017
 */

const API_KEY = null;
const SENDER_ID = null;
const ROUTE = null;

const msg91 = require('./index')(API_KEY, SENDER_ID, ROUTE);

// put your mobile number here
const mobileNo = 'XXXXXXXXXX';

// sending message to a single number
msg91.send(mobileNo, 'MESSAGE')
  .then(response => console.log(response))
  .catch(err => console.log(err));

// can also send sms to an array of numbers
const mobileList = ['XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX'];

msg91.send(mobileList, 'MESSAGE')
  .then(response => console.log(response))
  .catch(err => console.log(err));

// mobile numbers can be inside a CSV file
const mobileNoCSV = 'XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX';

// pass the CSV file containing mobile numbers
msg91.send(mobileNoCSV, 'MESSAGE')
  .then(response => console.log(response))
  .catch(err => console.log(err));

// check your balance
msg91.getBalance()
  .then(response => console.log(response))
  .catch(err => console.log(err));

// get balance for a particular route
msg91.getBalance(ROUTE)
  .then(response => console.log(response))
  .catch(err => console.log(err));
