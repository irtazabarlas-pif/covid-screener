
const fs = require('fs');
const fc = require('./Flowcharts');

function storeJSONData(data, path) {
    try {
        fs.writeFileSync(path, JSON.stringify(data))
    } catch (err) {
        console.error(err)
    }
}

function loadJSONData(path){
    try {
      return JSON.parse(fs.readFileSync(path, 'utf8'));
    } catch (err) {
      console.error(err)
      return false
    }
}

function getCookieValue(req, key) {
  // let received_cookie = JSON.stringify(req.cookies);
  // let cookie_empty = Object.keys(received_cookie).length === 0; // && req.cookies.constructor === Object;
  try {
      cookie_value = req.cookies[key];
      if(cookie_value !== undefined) 
          return cookie_value;
  }
  catch(ee) {
      console.log('getCookieValue error: ' + ee.message);
  }

  return "";
}

module.exports = { loadJSONData, storeJSONData, getCookieValue};