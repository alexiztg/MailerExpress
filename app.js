const express  = require('express');
const app = express();
const routes = require('./routes/index');

app.use(routes);

app.get('/', function (req, res) {
    res.send('NODE MAILER EXPRESS');
  });

app.listen(3000, ()=> {
    console.log("app listening on port 3000");
})