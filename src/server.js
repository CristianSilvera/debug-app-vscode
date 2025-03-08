import express from "express";

const app = express();

app.get('/', (req, res) => {
    const users = ['Diego', 'Luis', 'Carlos', "Valeria"];

    return res.json({users})
});

app.listen(3333);