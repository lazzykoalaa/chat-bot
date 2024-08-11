import React from 'react';
import { marked } from 'marked';
import './ChatBox.css';

const ChatMessage = ({ sender, text, time }) => {
    const isUser = sender === 'user';
    const htmlContent = marked(text);
    return (
        <div className={`message ${isUser ? 'user' : 'bot'}`} style={{textAlign:'left'}}>
            <div className="message-text" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            {time && <div className="time-stamp">{time}</div>}
        </div>
    );
};

export default ChatMessage;