function isBrowserElectron(req, res) {
    try {
        const userAgent = req.headers['user-agent'];
        if (!userAgent) {
            return false;
        }
        return userAgent.includes("Electron");
    } catch (error) {
        console.error('Error checking Electron user agent:', error);
        return false;
    }
}

module.exports = isBrowserElectron;
