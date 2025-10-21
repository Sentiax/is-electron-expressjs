const express = require('express')
const app = express()
const port = 3000
const isBrowserElectron = require("../index");

app.get('/', (req, res) => {
    const useragent = req.headers['user-agent'];
    res.send(`is electron? ${(isBrowserElectron(req, res)) ? 'Its Electron' : 'Its not electron'}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
