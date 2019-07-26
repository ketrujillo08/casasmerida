import { Injectable, Inject } from '@nestjs/common';
import { Usuario } from './interfaces/usuario.interface';
import {Model} from 'mongoose';
import { CreateUsuarioDto } from './dto/usuario.dto';
import * as crypto from 'crypto';
import { MongoBaseRepository } from '../../classes/mongo-repository';

@Injectable()
export class UsuarioService extends MongoBaseRepository {
    constructor(@Inject('USUARIO_MODEL') private readonly usuario: Model<Usuario>) {
        super(usuario);
    }

    async create(createUsuario:CreateUsuarioDto):Promise<Usuario>{

        const hash = crypto.createHash('SHA256');
        hash.update(createUsuario.pwd);
        createUsuario.pwd = hash.digest('hex');
        const creadtedUsuario = new this.usuario(createUsuario);
        return await creadtedUsuario.save();
    }   

    async findAll():Promise<Usuario[]>{
        return await this.usuario.find().exec();
    }

    async findById(usuarioId:string):Promise<Usuario>{
        return await this.usuario.findById(usuarioId).exec();
    }

    async update(usuarioId:string,usuario:CreateUsuarioDto){
        const hash = crypto.createHash('SHA256');
        hash.update(usuario.pwd);
        usuario.pwd = hash.digest('hex');
        return await this.usuario.findByIdAndUpdate(usuarioId,usuario).exec();

    }

    


}
