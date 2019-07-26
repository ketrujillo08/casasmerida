import {Document} from 'mongoose';

export interface Usuario extends Document{
    readonly nombre: string;
    readonly apellido: string;
    readonly correo: string;
    readonly telefono: string;
    readonly pwd: string;
    readonly google: boolean;
    readonly activo: boolean;
    readonly avatar:string;

}