const {check} = require("express-validator")
const checks  = [
    check("name")
        .not().isEmpty().withMessage("el campo name es obligatorio")
        .isString().withMessage("el campo name debe ser de tipo string"),
    check("email")
        .not().isEmpty().withMessage("el campo email es obligatorio")
        .isString().withMessage("el campo tipo debe ser de email string")
        .isEmail().withMessage("el string ingresado debe ser un email"),
    check("password")
        .not().isEmpty().withMessage("el campo password es obligatorio")
        .isString().withMessage("el campo password debe ser de tipo string"),
]
module.exports = checks