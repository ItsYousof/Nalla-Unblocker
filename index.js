import express from 'express';
import http from 'node:http';
import { createBareServer } from '@tomphttp/bare-server-node';
import cors from 'cors';
import path from "path";
import { hostname } from "node:os"

const server = http.createServer();
const app = express(server);
const __dirname = process.cwd();
const bareServer = createBareServer('/b/');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.use(cors());

server.on('request', (req, res) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeRequest(req, res)
    } else {
        app(req, res)
    }
})

server.on('upgrade', (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeUpgrade(req, socket, head)
    } else {
        socket.end()
    }
})

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/static/index.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/static/index.html'));
});

app.get('/service', (req, res) => {
    res.sendFile(join(__dirname, publicPath, "service.html"));
})

app.get("/home", (req, res) => {
    res.sendFile(join(__dirname, publicPath, "index.html"));
})

app.get('/games', (req, res) => {
    res.sendFile(join(__dirname, publicPath, 'games.html'));
});

app.get('/tabs', (req, res) => { 
    res.sendFile(join(__dirname, publicPath, 'tabs.html'));
});

app.get('/settings', (req, res) => {
    res.sendFile(join(__dirname, publicPath, 'settings.html'));
});

app.get('/apps', (req, res) => {
    res.sendFile(join(__dirname, publicPath, 'apps.html'));
});


const PORT = 3000;
server.on('listening', () => {
    const address = server.address();

    console.log("Listening on:");
    console.log(`\thttp://localhost:${address.port}`);
    console.log(`\thttp://${hostname()}:${address.port}`);
    console.log(
        `\thttp://${address.family === "IPv6" ? `[${address.address}]` : address.address
        }:${address.port}`
    );
})

server.listen({ port: PORT, })

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
    console.log("SIGTERM signal received: closing HTTP server");
    server.close();
    bareServer.close();
    process.exit(0);
}