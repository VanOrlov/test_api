function tokenRequired(req, res, next){
    const token = req.headers['authorization']
    if(!token || token !== 'Bearer 0123456789'){
        return res.status(401).json({message: 'Token is not required'})
    }
    next()
}

module.exports = tokenRequired