import React from 'react';
import './App.css';
import MessageAppBar from "./messages/MessageAppBar";
import SendMessage from "./messages/SendMessage";

function Messages() {
  return (
    <div>
        <MessageAppBar />
        <SendMessage />
    </div>
  );
}

export default Messages;
