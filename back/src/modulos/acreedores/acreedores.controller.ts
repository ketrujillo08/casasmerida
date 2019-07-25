import { Controller, Post, Body, Res, Put, Param, Delete } from '@nestjs/common';
import { AcreedoresService } from './acreedores.service';
import { Response, response } from 'express';

@Controller('acreedores')
export class AcreedoresController {

    constructor(private acreedorService: AcreedoresService) {

    }
    @Post()
    create(@Body() acreedor: any, @Res() response: Response) {
        this.acreedorService.printConsole(acreedor);
        response.send({
            acreedor,
            mensaje: "Creando acreedor"
        });
    }

    @Put(":id")
    update(@Body() acreedor: any, @Res() response: Response, @Param() params) {
        let id = params.id;
        response.send({
            id,
            acreedor,
            mensaje: "Actualizando acreedor"
        });
    }

    @Delete(":id")
    delete(@Param() params, @Res() response: Response) {

        let id = params.id

        response.send({
            id,
            mensaje:"Elimando acreedor"
        });

    }
}
