require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{

    res.send('Servidor rodando na escola');
});

app.get('/info', (req, res)=>{

    res.json({
        Atividade:    process.env.Atividade,
    })
})






//PARA RODAR SERVIDOR
app.listen(PORT,()=>{
    console.log(`Servidor rodando http://localhost:${PORT}`)
})