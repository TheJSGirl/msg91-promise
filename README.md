# msg91-promise
Promise based Msg91 API for node.js

# Msg91 Installation

```javascript 
npm install msg91-promise -S
yarn add msg91-promise
```

# APIs

### ROUTE_NO
```javascript
1 - Promotional Route
4 - Transactional Route
```


### Send SMS

```javascript

const API_KEY = null; // your API key
const SENDER_ID = null; // your sender ID, exact 6 chars long
const ROUTE = null; //route number (See above)

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

```