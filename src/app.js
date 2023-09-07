import express from "express";
import db from "./utils/dataBase.js";
import ToDo from "./models/toDos.model.js";
import cors from "cors";
import Todosrouter from "./components/toDos/todo.routes.js";
import 'dotenv/config'

ToDo;

const app = express();

const PORT = process.env.PORT ?? 8000;

app.use(express.json(), cors(), Todosrouter);

db.authenticate()
  .then(() => {
    console.log("Conexión correcta");
  })
  .catch((error) => console.log(error));

db.sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando el puerto ${PORT}`);
});
