//console.log(("Hello"))

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 4000;

app.get("/", (req, res) => {
    // res.send("Hello World");
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("ユーザーが接続しました");

    socket.on("chat message", (msg) => {
        // console.log("メッセージ: " + msg);
        io.emit("chat message", msg);
    });
});


server.listen(process.env.PORT || 4000, () => {
    console.log(`listening on ${PORT}`)
});