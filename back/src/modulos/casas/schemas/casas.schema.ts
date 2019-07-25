import { Schema } from 'mongoose';
import { VIVIENDAS } from '../enum/viviendas.enum';
import { LocationSchema } from './location.schema';
export const CasasSchema = new Schema({
    title: String,
    price: Number,
    area: Number,
    rooms: Number,
    tipo: { type: String, enum: VIVIENDAS },
    status: { type: String, enum: ["RENTA", "VENTA"] },
    location: LocationSchema,
    images: [String],
    description: String,
    bedrooms: Number,
    bathrooms: Number,
    garages: Number,
    features: Object,
    activo: { type: Boolean, default: true }
});