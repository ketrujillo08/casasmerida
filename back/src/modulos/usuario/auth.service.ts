import { Injectable, Inject } from '@nestjs/common';
import {Model} from 'mongoose';
import { Usuario } from './interfaces/usuario.interface';
import { CreateUsuarioDto } from './dto/usuario.dto';
import * as crypto from 'crypto';
import { JwtPayload } from './interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

    constructor(@Inject('USUARIO_MODEL') private readonly  usuarioModel:Model<Usuario>,
    private readonly jwtService: JwtService
    ){

    }

    async login(usuarioBuscar:CreateUsuarioDto){
        
        const hash = await crypto.createHash('SHA256');
        await hash.update(usuarioBuscar.pwd);
        const verify:string = await hash.digest('hex');
        const userFinded = await this.usuarioModel.findOne({correo:usuarioBuscar.correo}).exec();
        if(verify === userFinded.pwd){
            return Promise.resolve(this.createToken(userFinded));
        }else{
            return Promise.reject("Error Login");
        }

    }

    async validateToken(token:string){
        return await this.jwtService.decode(token)
    }

    async createToken(usuarioBuscar:CreateUsuarioDto) {
        const payload: JwtPayload = {
            nombre:usuarioBuscar.nombre,
            apellido:usuarioBuscar.apellido,
            avatar:usuarioBuscar.avatar,
            correo:usuarioBuscar.correo

        };
        const accessToken = this.jwtService.sign(payload);
        return accessToken;
      }



}
