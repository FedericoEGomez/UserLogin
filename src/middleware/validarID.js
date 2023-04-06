const {User} = require("../models/user")
const validarID = async (req, res, next) =>{
    try {
        const food = await User.findById(req.params.id)
        if (food !== null) {
            next()
        } else {
           res.status(400).json({msg: "el id es invalido"}) 
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { validarID }