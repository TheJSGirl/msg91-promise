/**
 * Created by hiren on 26/11/15.
 */
const API_KEY = null;
const SENDER_ID = null;
const ROUTE = null;

const msg91 = require('./index')(API_KEY, SENDER_ID, ROUTE);

const mobileNo = 'XXXXXXXXXX';

msg91.send(mobileNo, 'MESSAGE', (err, response) => {
  console.log(err);
  console.log(response);
});


const mobileList = ['XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX'];

msg91.send(mobileList, 'MESSAGE', (err, response) => {
  console.log(err);
  console.log(response);
});

const mobileNoCSV = 'XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX';

msg91.send(mobileNoCSV, 'MESSAGE', (err, response) => {
  console.log(err);
  console.log(response);
});

msg91.getBalance((err, response) => {
  console.log(err);
  console.log(response);
});

msg91.getBalance(ROUTE)
  .then(response => console.log(response))
  .catch(err => console.log(err));
