const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '..')));

// Rota para arquivos estáticos
app.get(/.+\.(js|ico|html|png|css|map)$/, function (req, res) {
    const filePath = path.join(__dirname, req.originalUrl);
    res.sendFile(filePath);
});

// Rota para todas as outras requisições
app.get(/.+$/, function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// npm i express
// node server
// 127.0.0.1:3000