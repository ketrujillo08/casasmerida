import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioProvider } from './usuario.provider';
import { UsuarioController } from './usuario.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { MongoConnectionModule } from '../../connections/mongo-connection/mongo-connection.module';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';
@Module({
    imports: [
        MongoConnectionModule,
        JwtModule.register({
          secretOrPrivateKey: 'batman',
          signOptions: {
            expiresIn: 3600,
          },
        }),
  ],
  providers: [UsuarioService,AuthService, ...UsuarioProvider],
  controllers: [UsuarioController]
})
export class UsuarioModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .exclude({path:'usuario',method:RequestMethod.GET})
    .exclude({path:'usuario/login',method:RequestMethod.POST})
    .forRoutes({path:'usuario',method:RequestMethod.POST})
    
    
  }

}
