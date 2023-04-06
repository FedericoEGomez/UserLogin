const {check} = require("express-validator")
const checksLogin  = [
    check("email")
        .not().isEmpty().withMessage("el campo email es obligatorio")
        .isString().withMessage("el campo tipo debe ser de email string")
        .isEmail().withMessage("el string ingresado debe ser un email"),
    check("password")
        .not().isEmpty().withMessage("el campo password es obligatorio")
        .isString().withMessage("el campo password debe ser de tipo string"),
]
module.exports = checksLogin