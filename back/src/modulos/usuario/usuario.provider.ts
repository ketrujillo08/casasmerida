
import { Provider } from "@nestjs/common";
import { MongoProvider } from "../../classes/mongo-provider";
import { UsuarioSchema } from "./schemas/usuario.schema";

export const UsuarioProvider: Provider[] = [MongoProvider.forRoot("USUARIO_MODEL", "Usuarios", UsuarioSchema)];