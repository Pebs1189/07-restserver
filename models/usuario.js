const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio'] 
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: true
    }
});

//Quita del esquema el password y la versión
UsuarioSchema.methods.toJSON = function () {
    const {__v, password, _id, ...usuario} = this.toObject();
    return {uid: _id, ...usuario };
}

module.exports = model( 'Usuario', UsuarioSchema );