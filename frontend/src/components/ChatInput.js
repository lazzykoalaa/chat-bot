import React, { useState } from 'react';
import './ChatBox.css';

const ChatInput = ({ sendMessage, placeholder }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            sendMessage(input);
            setInput('');
        }
    };

    return (
        <div className="chat-input">
            <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={placeholder || "Type your message..."}
                    style={{ flex: 1 }}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatInput;