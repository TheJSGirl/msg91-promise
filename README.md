# msg91-promise
Promise based Msg91 API for node.js

[![NPM](https://nodei.co/npm/msg91-promise.png)](https://nodei.co/npm/msg91-promise/)

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


### USAGE

```javascript

const msg91 = require('msg91-promise');

const API_KEY = 'XXXXXXXXXXXXXXXXXXXX'; // Your API key
const SENDER_ID = 'TESTPR'; // Your sender id 
const ROUTE = 4; // transactional route

const msg91SMS = msg91(API_KEY, SENDER_ID, ROUTE);


const mobileNo = 'XXXXXXXXXX';
msg91SMS.send(mobileNo, 'MESSAGE')
  .then(response => console.log(response))
  .catch(err => console.log(err));

// can also send sms to an array of numbers
const mobileList = ['XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX'];

msg91SMS.send(mobileList, 'MESSAGE')
  .then(response => console.log(response))
  .catch(err => console.log(err));

// mobile numbers can be inside a CSV file
const mobileNoCSV = 'XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX';

// pass the CSV file containing mobile numbers
msg91SMS.send(mobileNoCSV, 'MESSAGE')
  .then(response => console.log(response))
  .catch(err => console.log(err));

// check your balance
msg91SMS.getBalance()
  .then(response => console.log(response))
  .catch(err => console.log(err));

// get balance for a particular route
msg91SMS.getBalance(ROUTE)
  .then(response => console.log(response))
  .catch(err => console.log(err));

```