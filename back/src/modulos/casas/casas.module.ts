import { Module } from '@nestjs/common';
import { CasasController } from './casas.controller';
import { CasasService } from './casas.service';
import { CasasProvider } from './casas.provider';
import { MongoConnectionModule } from '../../connections/mongo-connection/mongo-connection.module';

@Module({
    imports: [MongoConnectionModule],
    controllers: [CasasController],
    providers: [CasasService,...CasasProvider]
})
export class CasasModule {}
