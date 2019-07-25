import { Schema } from 'mongoose';
export const LocationSchema = new Schema({
    direccion: String,
    ciudad: String,
    estado: String,
    zip: String,
    lat: String,
    alt: String
});