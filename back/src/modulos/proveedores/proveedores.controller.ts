import { Controller, Post, Body, Res, Delete, Param, Put } from '@nestjs/common';
import { Response } from 'express';
import { ProveedoresService } from './proveedores.service';

@Controller('proveedores')
export class ProveedoresController {
    constructor(private proveedorService: ProveedoresService) {}

    @Post()
    create(@Body() proveedor: any, @Res() response: Response) {
        this.proveedorService.printConsole(proveedor);
        response.send({
            proveedor,
            mensaje: "Creando proveedor"
        });
    }

    @Put(":id")
    update(@Body() proveedor: any, @Res() response: Response, @Param() params) {
        let id = params.id;
        response.send({
            id,
            proveedor,
            mensaje:"Actualizando proveedor"
        });
    }

    @Delete(":id")
    delete(@Param() params,@Res() response:Response) {

        let id = params.id

        response.send({
            id,
            mensaje: "Elimando proveedor"
        });

    }
}
