import React from 'react';
import ChatBox from './components/ChatBox';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Gemini Chatbot</h1> */}
      </header>
      <ChatBox />
    </div>
  );
}

export default App;
