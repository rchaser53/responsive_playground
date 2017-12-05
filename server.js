const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)

app.use('/', express.static(path.join(__dirname, 'css')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'mobile.html'))
});

server.listen(3000, () => {
  console.log('run server');
});