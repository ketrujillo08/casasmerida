export class CreateUsuarioDto{
    readonly nombre: string;
    readonly apellido: string;
    readonly correo: string;
    readonly telefono: string;
    pwd: string;
    readonly google: boolean;
    readonly activo: boolean;
    readonly avatar:string;
}