const express = require('express');

var app = express();

app.use(express.static(__dirname + "/client"));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/data', (req, res) => {
  res.send({
    name: 'Michael Gee',
    age: 21,
    nickname: 'Mike'
  });
});

app.listen(3000, () => {
  console.log("Local serving on port 3000!");
});
