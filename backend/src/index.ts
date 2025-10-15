import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3030 });
const uuidv4 = require("uuid").v4;

interface Message {
  sender: string;
  text: string;
}

wss.on("connection", (ws) => {
  console.log("Client connected");
  const uuid = uuidv4();
  // Enviar ID al cliente
  ws.send(JSON.stringify({ type: "uuid", uuid }));

  ws.on("message", (data: any) => {
    const message = data.toString();
    console.log(`Message received: ${message}`);
    const broadcastMessage: Message = {
      sender: uuid,
      text: message,
    };

    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(JSON.stringify(broadcastMessage));
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:3030");
