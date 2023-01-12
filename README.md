# How to use
## First download the pkg
```bash
npm i is-electron-expressjs --save-dev
```
## Second use this script
```js
const isBrowserElectron = require("is-electron-expressjs");

app.get('/', (req, res) => {
    res.send(`is electron? ${(isBrowserElectron(req, res)) ? 'Its Electron 👏' : 'Its not electron'};`);
})
```
