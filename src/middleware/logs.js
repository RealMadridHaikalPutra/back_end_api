const logRequest = (req, res, next) =>{
    console.log('Log Request dari:', req.path);
    next();
}

module.exports = logRequest