import { Module } from '@nestjs/common';
import { AcreedoresController } from './acreedores.controller';
import { AcreedoresService } from './acreedores.service';
import { AcreedoresProvider } from './acreedores.provider';
import { MongoConnectionModule } from '../../connections/mongo-connection/mongo-connection.module';

@Module({
    imports: [MongoConnectionModule],
    controllers: [AcreedoresController],
    providers: [AcreedoresService, ...AcreedoresProvider]
})
export class AcreedoresModule {}
