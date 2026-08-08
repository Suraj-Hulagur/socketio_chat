const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("join", (username) => {
        socket.username = username;
        socket.broadcast.emit("system message", `${username} joined the chat`);
    });

    socket.on("chat message", (msg) => {
        io.emit("chat message", {
            user: socket.username,
            message: msg
        });
    });

    socket.on("disconnect", () => {
        if (socket.username) {
            socket.broadcast.emit(
                "system message",
                `${socket.username} left the chat`
            );
        }
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
