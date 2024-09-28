import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    const userMessage = input;
    setMessages([...messages, { role: "user", text: userMessage }]);

    const response = await axios.post("http://localhost:5000/chat", {
      userMessage,
    });
    const botMessage = response.data.response;

    setMessages([
      ...messages,
      { role: "user", text: userMessage },
      { role: "bot", text: botMessage },
    ]);
    setInput("");
  };

  return (
    <>
    <h1 className="heading">Swasthya (AI Chatbot)</h1>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </>
  );
}

export default App;
