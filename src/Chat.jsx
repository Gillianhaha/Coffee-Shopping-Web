import { useState, useEffect, useRef } from 'react';
import Button from './Button';

import './Chat.css';

function Chat({ username, messages, onlineUsers, getMessagesAndOnlineUsers, addMessage, onLogout }) {
    const [input, setInput] = useState('');
    const messagesContainerRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!input) {
            return;
        }
        addMessage(input)
        setInput(''); 
    };

    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        getMessagesAndOnlineUsers();
        const intervalId = setInterval(() => {
            getMessagesAndOnlineUsers();
            scrollToBottom();
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="chat-content">
            <h1 className="welcome">Chatting Board</h1>
            <h2 className="users-title">Online Users:</h2>
            <ul className="users">
                {Object.values(onlineUsers).map((user) => (
                    <li key={user} className="user-item">
                        <span className="username">{user}</span>
                    </li>
                ))}
            </ul>
            <h2 className="messages-title">Chat Messages:</h2>
            <ul className="messages" ref={messagesContainerRef}>
                {Object.values(messages).map((message) => (
                    <li key={message.id} className="message-item">
                        <div className="message">
                            <span className="username">{message.sender}: </span>
                            <span className="message-text">{message.text}</span>
                        </div>
                    </li>
                ))}
            </ul>

            <form id="message-form" className="add-form" onSubmit={handleSubmit}>
                <label htmlFor="text"> Message: 
                    <input
                        className="add-message"
                        type="text"
                        id="text"
                        placeholder="Enter a message"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        required
                    />
                </label>
                <Button className="send" type="submit">Send</Button>
                <Button onClick={onLogout} className="logout" type="button">Logout</Button>
            </form>
        </div>
    );
}

export default Chat;