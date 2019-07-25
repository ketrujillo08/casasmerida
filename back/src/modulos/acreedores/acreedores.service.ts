import { Injectable, Inject } from '@nestjs/common';
import { MongoBaseRepository } from '../../classes/mongo-repository';
import { Model } from 'mongoose'
import { Acreedores } from './interfaces/acreedores.interface';

@Injectable()
export class AcreedoresService extends MongoBaseRepository{

    constructor(@Inject('ACREEDORES_MODEL') private readonly acreedor: Model<Acreedores>) {
        super(acreedor);
    }

    printConsole(text: any) {
        console.log(text);
    }

}
