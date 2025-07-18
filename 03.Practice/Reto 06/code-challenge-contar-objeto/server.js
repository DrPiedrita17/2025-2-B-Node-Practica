import express from "express";
import routes from "./src/routes/index.js";

const app = express();
app.use(express.json());
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});