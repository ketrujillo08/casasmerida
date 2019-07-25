import { Provider } from "@nestjs/common";
import { MongoProvider } from "../../classes/mongo-provider";
import { CasasSchema } from "./schemas/casas.schema";

export const CasasProvider: Provider[] = [MongoProvider.forRoot("CASAS_MODEL", "Casas", CasasSchema)];