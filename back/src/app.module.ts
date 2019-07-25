import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProveedoresModule } from './modulos/proveedores/proveedores.module';
import { AcreedoresModule } from './modulos/acreedores/acreedores.module';
import { MongoConnectionModule } from './connections/mongo-connection/mongo-connection.module';
import { CasasModule } from './modulos/casas/casas.module';
@Module({
  imports: [ProveedoresModule, AcreedoresModule, MongoConnectionModule, CasasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
