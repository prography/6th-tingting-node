const express = require('express');
const loaders = require('./loaders');
var app = express();

(async function startApp (app) {
    await loaders(app)
    app.listen(3000, () => {
      console.log('서버 작동 중')
    })
})(app);

