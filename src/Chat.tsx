import React, { useState } from 'react';
import './Chat.css';

// Define an interface for the chat object
interface Chat {
  id: number;
  name: string;
  lastMessage: string;
}

// Define an interface for chat messages
interface Message {
  id: number;
  sender: string;
  message: string;
}

const ChatApp: React.FC = () => {
  // Dummy data for sidebar showing people you were talking to
  const [chats] = useState<Chat[]>([
    { id: 1, name: 'John', lastMessage: 'Hey there!' },
    { id: 2, name: 'Alice', lastMessage: 'How are you?' },
    { id: 3, name: 'Bob', lastMessage: 'What\'s up?' },
  ]);

  // Dummy data for chat messages with a selected user
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'John', message: 'Hey, how are you?' },
    { id: 2, sender: 'Me', message: 'I\'m doing great, thanks!' },
    { id: 3, sender: 'John', message: 'Awesome!' },
  ]);

  // State to keep track of the currently selected chat
  const [selectedChat, setSelectedChat] = useState<Chat>(chats[0]);

  // Function to handle selecting a chat
  const handleChatSelect = (chat: Chat) => {
    setSelectedChat(chat);
    // Replace this with logic to fetch messages for the selected chat
    // For now, I'll just update messages to show different dummy messages based on the selected chat
    switch (chat.name) {
      case 'John':
        setMessages([
          { id: 1, sender: 'John', message: 'Hey, how are you?' },
          { id: 2, sender: 'Me', message: 'I\'m doing great, thanks!' },
          { id: 3, sender: 'John', message: 'Awesome!' },
        ]);
        break;
      case 'Alice':
        setMessages([
          { id: 1, sender: 'Alice', message: 'Hey there!' },
          { id: 2, sender: 'Me', message: 'I\'m good, how about you?' },
        ]);
        break;
      case 'Bob':
        setMessages([
          { id: 1, sender: 'Bob', message: 'What\'s up?' },
          { id: 2, sender: 'Me', message: 'Not much, just chilling.' },
        ]);
        break;
      default:
        setMessages([]);
    }
  };

  // Function to handle sending a message
  const sendMessage = () => {
    // Implement message sending functionality here
  };

  return (
    <div className="chat-app">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Chats</h2>
        <ul>
          {chats.map((chat) => (
            <li key={chat.id} className={selectedChat === chat ? 'active' : ''} onClick={() => handleChatSelect(chat)}>
              {chat.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Chat Window */}
      <div className="chat-window">
        <h2>{selectedChat.name}</h2>
        <div className="messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender === 'Me' ? 'sent' : 'received'}`}>
              <p>{message.message}</p>
            </div>
          ))}
        </div>
        <div className="message-input">
            <input type="text" className="message-input-field" placeholder="Type a message..." />
            <button className="send-button" onClick={sendMessage}>Send</button>
        </div>

      </div>
    </div>
  );
};

export default ChatApp;
