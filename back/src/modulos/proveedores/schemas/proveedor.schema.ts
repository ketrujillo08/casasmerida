import { Schema} from 'mongoose';

export const ProveedorSchema = new Schema({
    cuenta: String,
    contactos: Object
});