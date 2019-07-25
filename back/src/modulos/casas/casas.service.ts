import { Inject } from '@nestjs/common';
import { Casa } from './interfaces/casas.interface';
import { Model } from 'mongoose';
import { MongoBaseRepository } from '../../classes/mongo-repository';
import { CasaDto } from './dto/casas.dto';


export class CasasService extends MongoBaseRepository {
    constructor(@Inject('CASAS_MODEL') private readonly casa: Model<Casa>) {
        super(casa);
    }

    async create(casaDto: CasaDto): Promise<Casa> {
        const casaCreated = new this.model(casaDto);
        return await casaCreated.save();
    }
}
