import { Client } from "https://deno.land/x/mysql/mod.ts";

const db = await new Client().connect({
    hostname: "localhost",
    username: "root",
    db: "pruebadeno",
    password: "A123456b",
  });

  export default db;