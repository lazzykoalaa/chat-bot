import React, { useState } from 'react';
import axios from 'axios';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import './ChatBox.css';
import logo from '../assets/logo.png'; // Assuming you have a logo image

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [userName, setUserName] = useState('');
    const [isNameSet, setIsNameSet] = useState(false);

    const sendMessage = async (message) => {
        const userMessage = { sender: 'user', text: message, time: new Date().toLocaleTimeString() };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post('https://chatbot-backend-nine.vercel.app/api/chat', {
                prompt: message,
            });

            const botMessage = {
                sender: 'bot',
                text: response.data.text,
                time: new Date().toLocaleTimeString()
            };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };

    const handleNameSubmit = (name) => {
        setUserName(name);
        setIsNameSet(true);

        const welcomeMessage = `Hi ${name}, welcome to Lazzy Koalaa bot! How can I assist you today?`;
        const botMessage = {
            sender: 'bot',
            text: welcomeMessage,
            time: new Date().toLocaleTimeString()
        };
        setMessages([...messages, botMessage]);
    };

    return (
        <div className="chatbox">
            <div style={{paddingBottom:'50px'}}>
            <img src={logo} alt="Logo" className="logo" />
            <div className="title">Lazzy Koalaa Bot</div>
            </div>
            <div className="messages">
                {messages.map((msg, index) => (
                    <ChatMessage key={index} sender={msg.sender} text={msg.text} time={msg.time} />
                ))}
            </div>
            {isNameSet ? (
                <ChatInput sendMessage={sendMessage} />
            ) : (
                <ChatInput sendMessage={handleNameSubmit} placeholder="Enter your name..." />
            )}
        </div>
    );
};

export default ChatBox;