import { Controller, Post, Body, Res } from '@nestjs/common';
import { create } from 'istanbul-reports';
import { CasaDto } from './dto/casas.dto';
import { Response } from 'express';
import { CasasService } from './casas.service';

@Controller('casas')
export class CasasController {

    constructor(private casasService: CasasService) { }

    @Post()
    create(@Body() casaDto: CasaDto, @Res() response: Response) {
        this.casasService.create(casaDto).then(casa => {
            response.send({
                success: true,
                casa
            });
        }).catch(err => {
                response.sendStatus(400).send({
                    success: false,
                    error: "No se pudo insertar registro",
                    err
                })
            });
    }
}
