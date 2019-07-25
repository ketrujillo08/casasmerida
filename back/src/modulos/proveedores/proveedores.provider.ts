import { Provider } from "@nestjs/common";
import { MongoProvider } from "../../classes/mongo-provider";
import { ProveedorSchema } from "./schemas/proveedor.schema";

export const ProveedoresProvider: Provider[] = [MongoProvider.forRoot('PROVEEDORES_MODEL', 'Proveedores', ProveedorSchema)];