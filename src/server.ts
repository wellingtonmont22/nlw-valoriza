import "reflect-metadata";
import express from "express";

import "./database"

const app = express();

app.get("/test", (request, response) => {
    return response.send("Olá");
});


app.listen(5000, () => console.log("Rodando..."));