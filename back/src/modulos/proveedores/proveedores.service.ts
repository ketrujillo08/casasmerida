import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongoBaseRepository } from '../../classes/mongo-repository';
import { Proveedores } from './interfaces/proveedores.interface';

@Injectable()
export class ProveedoresService extends MongoBaseRepository {
    constructor(@Inject('PROVEEDORES_MODEL') private readonly proveedor: Model<Proveedores>) {
        super(proveedor);
    }


    printConsole(text: any) {
        console.log(text);
    }
}
