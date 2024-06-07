var express = require("express");
var app = express();
app.use(express.static('.'));

app.get(/.+\.(js|ico|html|png|css|map)$/, function (req, res) {
    res.sendFile(req.originalUrl.replace(/^./, ""));
});
app.get(/.+$/, function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
    console.log("Rodando 🚀")
});

// npm i express
// node server
// 127.0.0.1:3000