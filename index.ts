import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './app/routes/pruebas.routes.ts';

const app = new Application();
app.use(router.routes());


console.log("serving from http://localhost:8000/");
await app.listen({ port: 8000 });



