import { Schema } from 'mongoose';
export const AcreedorSchema = new Schema({
    cuenta: String,
    contactos: Object
});