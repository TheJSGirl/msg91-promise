/**
 * Created by hiren on 26/11/15.
 */

const msg91 = require('./index')('183855AEOEBOtm5a0c3b14', 'CCPLCK', 4);

// const mobileNo = '918826624872';

// msg91.send(mobileNo, 'MESSAGE', (err, response) => {
//   console.log(err);
//   console.log(response);
// });


// const mobileList = ['XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX'];

// msg91.send(mobileList, 'MESSAGE', (err, response) => {
//   console.log(err);
//   console.log(response);
// });

// const mobileNoCSV = 'XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX';

// msg91.send(mobileNoCSV, 'MESSAGE', (err, response) => {
//   console.log(err);
//   console.log(response);
// });

// msg91.getBalance((err, response) => {
//   console.log(err);
//   console.log(response);
// });

msg91.getBalance(4)
  .then(response => console.log(response))
  .catch(err => console.log(err));

