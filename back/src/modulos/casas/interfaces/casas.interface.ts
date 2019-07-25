import { Document } from 'mongoose';
export interface Casa extends Document {
    readonly title: string,
    readonly price: number,
    readonly area: number,
    readonly rooms: number,
    readonly tipo: string,
    readonly status: string,
    readonly location: Location,
    readonly images: string[],
    readonly description: string,
    readonly bedrooms: number,
    readonly bathrooms: number,
    readonly garages: number,
    readonly features: Object
}