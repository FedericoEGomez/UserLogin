const {User} = require("../models/user");
const bcrypt = require("bcryptjs")
const generarToken = require("../utils/jwtGenerator")

class ApiController {

    async verUsuarios (req, res) {
        const users = await User.find();
        console.log(users);
        res.status(200).json({users});
    }

    async register (req, res) {
        try {
            let salt = bcrypt.genSaltSync(10)
            let hash = bcrypt.hashSync(req.body.pass, salt)
            let usuario = {
                name: req.body.name,
                email: req.body.email,
                password: hash
            }
            const item = new User(usuario)
            await item.save()
            res.status(201).json({item})
        } catch (error) {
            res.status(501).json({error})
        }
    }

    async editarUnUsuario (req, res) {
        try {
            await User.findByIdAndUpdate(req.params.id,req.body);
            console.log("ususario editada");
            res.status(201).json(req.body);
        } catch (error) {
            console.log(error);
            res.status(501).json(error);
        }
    }

    async eliminarUsuario (req, res) {
        const user = await User.findByIdAndDelete(req.params.id);
        console.log({msg: "adios usuario", user});
        res.status(200).json({msg: "adios usuario", user});
    }
    async loginToken (req, res) {
        try {
            const usuario = await User.findOne({email: req.body.email})

            if (usuario == null ) {
                res.json({msg: "El mail o la contraseña es incorrecto"})     
            }
            if (!bcrypt.compareSync(req.body.password, usuario.password)) {
                res.json({msg: "El mail o la contraseña es incorrecto"}) 
            }
            const token = await generarToken({id:usuario._id, email:usuario.email})
        
            res.json({email: req.body.email, token})
        } catch (error) {
            res.json(error)
        }
    }

}

module.exports = new ApiController