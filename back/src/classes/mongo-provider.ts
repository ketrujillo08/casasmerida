import { Schema, Connection } from "mongoose";
import { Provider } from "@nestjs/common";
import { FactoryProvider } from "@nestjs/common/interfaces";

export class MongoProvider {
    public static forRoot(provide: string, nameModel: string, schema: Schema<any>): Provider {
        const provider: FactoryProvider = {
            provide,
            useFactory: (connection: Connection) => connection.model(nameModel, schema),
            inject: ['MONGO_CONNECTION']
        }
        return provider;
    }
}