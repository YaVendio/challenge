# Real-Time Chat Application

Create a real-time chat application using TypeScript, React, custom hooks, and WebSockets. The application must allow users to send and receive messages in real time. Additionally, unit tests must be written for components and hooks using Jest and the React Testing Library.

## Requirements

### Components

1. **ChatApp**: Main component that contains the application logic.
2. **ChatWindow**: Component that displays the list of messages.
3. **ChatMessage**: Component that represents an individual message.
4. **ChatInput**: Component for sending new messages.

### Custom Hook

- **useChat**: Hook personalizado para manejar el estado de los mensajes y la comunicación con el servidor WebSocket.

### Funcionalidades

- Enviar un nuevo mensaje.
- Recibir mensajes en tiempo real.
- Mostrar la lista de mensajes.

### Pruebas

- Pruebas unitarias para los componentes y el custom hook.

## Backend

Este repositorio incluye un pequeño servidor backend que expone un endpoint websocket para tus pruebas.

```sh
cd backend/
npm run start
```

El servidor se expodrá en ws://localhost:3030
