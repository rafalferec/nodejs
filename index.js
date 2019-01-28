const https = require('https'),
fs = require("fs")
express = require('express');


const port = 5000;



const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
});

// app.get('/webhook', (req, res) => {
//     if (req.query['hub.verify_token'] === '111122223333') {
//       res.send(req.query['hub.challenge']);
//     }
//   });
app.listen(5000);

// http.createServer(options, app).listen(5000);
// fkill -f :8080
// Aby zainstalować polecenie użycia polecenia fkill: npm i -g fkill