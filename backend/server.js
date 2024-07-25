import express, { json } from "express";
import { config } from "dotenv";
config();

const server = express();
server.use(json());

// Error Middleware
server.use((err, req, res, next) => {
    res.status(500).json({
        code: 500,
        answer: err.message,
    });
});

// 404-Handler
server.all("*", (req, res) => {
    res.status(404).json({
        code: 404,
        answer: "Page not found.",
    });
});

server.listen(process.env.PORT, () => {
    console.log("Server is running on Port 3000");
});
