# Real-Time Chat Application

Create a real-time chat application using TypeScript, React, custom hooks, and WebSockets. The application must allow users to send and receive messages in real time. Additionally, unit tests must be written for components and hooks using Jest and the React Testing Library.

## Requirements

### Components

1. **ChatApp**: Main component that contains the application logic.
2. **ChatWindow**: Component that displays the list of messages.
3. **ChatMessage**: Component that represents an individual message.
4. **ChatInput**: Component for sending new messages.

### Custom Hook

- **useChat**: Custom hook to handle message status and communication with the WebSocket server.

### Features

- Send a new message.
- Receive messages in real time.
- Display the message list.

### Tests

- Unit tests for components and the custom hook.

## Backend

This repository includes a small backend server that exposes a websocket endpoint for your testing.

```sh
cd backend/
npm run start
```

The server will be exposed at ws://localhost:3030
