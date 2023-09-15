const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    documento: {
        type: String,
        unique: true,
        required: [true, 'El documento es obligatorio']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    direccion: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    telefono: {
        type: String,
        required: [true, 'El telefono es obligatorio']
    },
    
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },

    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obligatorio']
    },
    idRol:{
        type: Schema.Types.ObjectId,
        ref: 'Rol',
        required: [true, 'El id del Rol es obligatorio']
    }
})

//Exportar la función UsuarioSchema
module.exports = model('Usuario',UsuarioSchema)
/*
{
    "documento": "1023625297",
    "nombre": "Emanuel Zapata",
    "direccion": "Calle 77C #91-44",
    "telefono": "3054070574",
    "correo": "emanuelzpx@gmail.com",
    "estado": true
    } 
    */