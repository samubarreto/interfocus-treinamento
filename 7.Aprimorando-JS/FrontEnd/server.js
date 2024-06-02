const { Pool } = require('pg');
const express = require('express');
const app = express();

// const pool = new Pool({
//     user: 'postgres',
//     host: '127.0.0.1',
//     database: 'postgres',
//     password: 'samu123',
//     port: 5432,
// });

app.use(express.static('.'));

app.get(/.+\.(js|ico|html|png|css|map)$/, function (req, res) {
    res.sendFile(req.originalUrl.replace(/^./, ""));
});

app.get(/.+$/, function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// async function fetchData() {
//     try {
//         const result = await pool.query('SELECT * FROM teste');
//         console.log(result.rows);
//     } catch (err) {
//         console.error('Erro ao consultar o banco de dados', err);
//     }
// }

// setInterval(fetchData, 10000);

// app.get('/data', async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM teste');
//         res.json(result.rows);
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Erro ao consultar o banco de dados');
//     }
// });

// npm install pg
// npm i express
// node server
// http://127.0.0.1:3000