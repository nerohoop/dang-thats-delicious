
exports.myMiddleware = (req, res, next) => {
    req.name = 'Nero';
    next();
}
exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');
};