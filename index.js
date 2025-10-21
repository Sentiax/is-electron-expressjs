function isBrowserElectron(res, req) {
   let isElectron = false;
    if (!res.headers['user-agent'].includes("Electron")) {
        isElectron = false;
    } else {
        isElectron = true;
    }
    return isElectron;  
}

module.exports = isBrowserElectron;
