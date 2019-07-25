import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ProveedoresController } from './proveedores.controller';
import { ProveedoresService } from './proveedores.service';
import { ProveedoresProvider } from './proveedores.provider';
import { MongoConnectionModule } from '../../connections/mongo-connection/mongo-connection.module';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';

@Module({
    imports: [MongoConnectionModule],
    controllers: [ProveedoresController],
    providers: [ProveedoresService, ...ProveedoresProvider]
})
export class ProveedoresModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes({ path: "proveedores", method: RequestMethod.POST })
    }
}
