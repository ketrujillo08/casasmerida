import { Controller, Post, Body, Res, Get, Param, Put } from '@nestjs/common';
import { Response } from 'express';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/usuario.dto';
import { AuthService } from './auth.service';

@Controller('usuario')
export class UsuarioController {

    constructor(private usuarioService:UsuarioService,private authService:AuthService) {
        
    }
    @Get()
    findAll(@Res() response:Response){

        this.usuarioService.findAll()
        .then(
           usuarios=>{
               if(usuarios.length<=0){
                return response.status(403).json({
                    success:false,
                    mensaje:"Sin registros"
                })
               }

               response.json({
                   success:true,
                   usuarios,
                   total:usuarios.length
               })

           }
        )
        .catch(err=>{
            return response.json({
                success:false,
                err
            })
        });

    }

    @Post()
    create(@Body() createUsuario:CreateUsuarioDto,@Res() response:Response){
        this.usuarioService.create(createUsuario)
        .then(usuarioCreado =>{
            response.json({
                success:true,
                data: usuarioCreado
            })
        })
        .catch(err=>{
             response.status(402).json({
                success:false,
                err,
                mensaje:err.errmsg
            })
        });
    }

    @Post("/login")
    login(@Body() userFind:CreateUsuarioDto,@Res() response:Response){
        this.authService.login(userFind)
        .then(token =>{
            return response.json({
                success:true,
                token:token
            })
        })
        .catch(err=>{
            return response.json({
                success:false,
                err
            })
        })
    }

    @Get(":id")
    findById(@Param() params,@Res() response:Response){
        let id = params.id
        this.usuarioService.findById(id)
        .then(
            usuario=>{
                if(!usuario){
                    return response.status(403).json({
                        success:false,
                        mensaje:"Sin registros"
                    })
                }

                response.json({
                    success:true,
                    usuario,
                    mensaje:"Éxito en consulta"
                });

            }
        )
        .catch(
            err=>{


                return response.json({
                    success:false,
                    err
                });
            }
        );
    }
    @Put(":id")
    findByIdAndUpdate(@Param() params,@Body() body,@Res() response:Response){
        let id = params.id
        if(body._id){
            delete body._id;
        }
        this.usuarioService.update(id,body)
        .then(
            usuario=>{
                if(!usuario){
                    return response.status(403).json({
                        success:false,
                        mensaje:"Sin registros"
                    })
                }

                response.json({
                    success:true,
                    usuario,
                    mensaje:"Éxito en consulta"
                });

            }
        )
        .catch(
            err=>{
                return response.status(400).json({
                    success:false,
                    err,
                    mensaje:err.errmsg
                });
            }
        );
    }
   
}
