import {Schema} from 'mongoose';
import { TipoUsuario } from '../enum/tipoUsuario.enum';

export const UsuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    correo: {type:String,unique:true, index:true},
    telefono: {type:String,unique:true, index:true},
    pwd: {type:String,unique:true, index:true},
    google: Boolean,
    activo: Boolean,
    tipo:{type:String,enum:TipoUsuario},
    avatar:String,
})