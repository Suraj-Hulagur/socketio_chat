# Socket.IO Two-Way Chat Application

This project is a simple real-time chat application built using Node.js and Socket.IO.  
It demonstrates bi-directional communication between multiple clients connected to a single server.

The main goal of this project is to understand how real-time applications such as chat systems work using WebSockets.

---

## Features
- Real-time message exchange between users  
- Multiple clients can connect simultaneously  
- User identification using usernames  
- Simple and clean user interface  
- Event-driven communication using Socket.IO  

---

## Technologies Used
- **Node.js** – JavaScript runtime environment  
- **Express.js** – Backend web framework  
- **Socket.IO** – Real-time, bi-directional communication  
- **HTML & CSS** – Frontend interface  

---

---

## How It Works
- Each browser tab represents a client connected to the Socket.IO server.
- When a user joins, the client emits a `join` event.
- Messages are sent using Socket.IO events instead of HTTP requests.
- The server broadcasts messages to all connected clients in real time.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/socketio-chat.git
2. Navigate to the project folder:
   cd socketio-chat
3. Install dependencies:
   npm install
4. Start the server:
   node server.js
5. Open the application in a browser:
   http://localhost:3000
6. Open it again in another tab

   


