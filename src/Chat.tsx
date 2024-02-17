import React, { useState } from 'react';
import './Chat.css';
import SiteNav from './SiteBar';

// Define an interface for the chat object
interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  profilePic: string;
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
    { id: 1, name: 'Danny Mcloaan', lastMessage: 'Hey there!', profilePic:'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp' },
    { id: 2, name: 'Johnny Doe', lastMessage: 'How are you?', profilePic:'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp' },
    { id: 3, name: 'Jane Smith', lastMessage: 'What\'s up?', profilePic:'https://images.ctfassets.net/hrltx12pl8hq/3AnnkVqrlhrqb9hjlMBzKX/693a8e5d40b4b6c55a7673ca4c807eef/Girl-Stock' },
    { id: 4, name: 'Swifties 4 life', lastMessage: 'What are you guys wearing tn?!?!', profilePic:'https://assets.teenvogue.com/photos/63612fe62cdbf142665a84ac/1:1/w_1849,h_1848,c_limit/unnamed%20(1).png' },
    { id: 5, name: 'I heart Doja', lastMessage: 'What are you guys wearing tn?!?!', profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqUmVYEOOyJ_YcN481sZiWEWpiS5d-QWP-U-s09cGUmg&s' },
  ]);

  // Dummy data for chat messages with a selected user
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'Danny Mcloaan', message: 'Hey, how are you?' },
    { id: 2, sender: 'Me', message: 'I\'m doing great, thanks!' },
    { id: 3, sender: 'Danny Mcloan', message: 'Awesome!' },
  ]);

  // State to keep track of the currently selected chat
  const [selectedChat, setSelectedChat] = useState<Chat>(chats[0]);

  // Function to handle selecting a chat
  const handleChatSelect = (chat: Chat) => {
    setSelectedChat(chat);
    // Replace this with logic to fetch messages for the selected chat
    // For now, I'll just update messages to show different dummy messages based on the selected chat
    switch (chat.name) {
      case 'Danny Mcloaan':
        setMessages([
          { id: 1, sender: 'Danny Mcloaan', message: 'Hey, Im trying to find omeone to go to the Weeknd with' },
          { id: 2, sender: 'Me', message: 'OMG same!' },
          { id: 3, sender: 'Danny Mcloaan', message: 'Awesome! Lets figure out logistics?' },
        ]);
        break;
      case 'Johnny Doe':
        setMessages([
          { id: 1, sender: 'Johnny Doe', message: 'Hey there!' },
          { id: 2, sender: 'Me', message: 'Hi!' },
        ]);
        break;
      case 'Swifties 4 life':
         setMessages([
            { id: 1, sender: 'Larrisa', message: 'What are you guys wearing tn?!?!' },
            { id: 2, sender: 'Me', message: 'A pink top and jeans!' },
            { id: 6, sender: 'Carrie', message: 'Im so excited :)' },
           ]);
        break;
        case 'I heart Doja':
            setMessages([
               { id: 8, sender: 'Mike', message: 'How do we want to get there?' },
               { id: 5, sender: 'Sam', message: 'Maybe split an Uber?' },
               { id: 2, sender: 'Me', message: 'I have a car so lowk I can drive' },
              ]);
           break;
      case 'Jane Smith':
        setMessages([
          { id: 1, sender: 'Jane Smith', message: 'What\'s up?' },
          { id: 2, sender: 'Me', message: 'Not much, just chilling.' },
        ]);
        break;
      default:
        setMessages([]);
    }
  };

  // Function to handle sending a message
  const sendMessage = (sender: string, messageText: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      sender: sender,
      message: messageText,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-app">
    {/* Sidebar */}
    <SiteNav></SiteNav>
    <div className="sidebar">
      <h2>Chats</h2>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id} className={selectedChat === chat ? 'active' : ''} onClick={() => handleChatSelect(chat)}>
            <img src={chat.profilePic} alt={chat.name} className="profile-pic" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
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
            <p><strong>{message.sender}: </strong>{message.message}</p>
          </div>
        ))}
      </div>
      <div className="message-input">
          <input type="text" className="message-input-field" placeholder="Type a message..." />
          <button className="send-button">Send</button>
      </div>

    </div>
  </div>
  );
};

export default ChatApp;
