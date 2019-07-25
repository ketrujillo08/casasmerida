import { MONGO_URI } from "../../config/mongo";
import * as mongoose from 'mongoose';

export const mongoConnectionProvider = [

    {
        provide: 'MONGO_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
                if (err)
                    console.log(err);
                else
                    console.log("Conexión creada a la base de datos");

            }),
    },
];