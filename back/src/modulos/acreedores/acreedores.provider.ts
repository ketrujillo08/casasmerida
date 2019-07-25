import { Provider } from "@nestjs/common";
import { MongoProvider } from "../../classes/mongo-provider";
import { AcreedorSchema } from "./schemas/acreedores.schema";

export const AcreedoresProvider: Provider[] = [MongoProvider.forRoot("ACREEDORES_MODEL", "Acreedores", AcreedorSchema)];