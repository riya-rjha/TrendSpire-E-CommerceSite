import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleMessageByEnter = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const capitalize = (message) => {
    message = message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();
    return message;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    const userMessage = input;
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", text: userMessage },
    ]);

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        userMessage,
      });
      const botMessage = response.data.response;

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", text: botMessage },
      ]);
      setError(false);
    } catch (error) {
      console.log(error.message);
      setError(true);
    } finally {
      setInput(""); // Clear input field after sending
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-[aliceblue]">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden min-h-[inherit] my-5">
        {/* Sidebar */}
        <div className="w-full lg:w-[120px] bg-teal-900 p-2 lg:p-4 flex flex-col items-center justify-between">
          <Link to="/">
            <div className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer bg-teal-800 rounded-full flex items-center justify-center mb-4">
              <img
                className="w-8 h-8 lg:w-12 lg:h-12"
                src="https://cdn-icons-png.freepik.com/256/10239/10239190.png"
                alt="Back"
              />
            </div>
          </Link>
          <div className="w-16 hidden md:flex h-16 lg:w-20 lg:h-20 bg-red-300 rounded-3xl items-center justify-center mb-4">
            <img
              className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-3xl"
              src="https://img.freepik.com/premium-photo/smiling-friendly-woman-wearing-longsleeve-top-article-clothing-fashion_1061358-44588.jpg"
              alt="Placeholder"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6 flex flex-col">
          <div className="text-center text-neutral-700 text-xl lg:text-2xl xl:text-2xl font-montserrat font-bold mb-4">
            <div className="mb-2">Say hello to</div>
            <div className="text-[#134E4A] text-2xl lg:text-3xl font-extrabold mb-2">
              IVY!
            </div>
            <div className="text-md lg:text-lg xl:text-xl">
              Your personal assistant
              <br />
              for clothing recommendations
            </div>
          </div>

          {/* Chat Container */}
          <div className=" flex-1 flex flex-col">
            <div className=" flex-1 overflow-y-auto mb-4 max-h-[60vh]">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.role}`}>
                  {error ? (
                    <div className="bg-red-100 p-2 my-2 rounded-md w-fit">
                      <p className="text-red-600">
                        An error occurred, please try again later!
                      </p>
                    </div>
                  ) : (
                    <div className="bg-green-100 p-2 my-2 rounded-md w-fit">
                      <p>
                        {
                          <span className="font-bold">
                            {capitalize(message.role)}
                          </span>
                        }
                        : {message.text.replace(/\*/g, "")}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <div className="bg-neutral-50 rounded-xl border-2 border-neutral-200 flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 text-neutral-700 text-sm lg:text-base font-montserrat rounded-l-xl focus:outline-none"
                onKeyDown={(e) => handleMessageByEnter(e)}
              />
              <button
                className="w-10 h-10 lg:w-12 lg:h-12 bg-green-800 rounded-full flex items-center justify-center ml-2"
                onClick={handleSendMessage}
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-600 rounded-full">
                  <img
                    src="https://cdn-icons-png.freepik.com/256/14440/14440605.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
                    alt="Send"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
