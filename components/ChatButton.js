"use client"
import { useState } from "react";
import Chat from "./Chat";

const ChatButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="">
            <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-4 left-4 bg-blue-500 text-white p-2 rounded-md shadow-lg hover:bg-blue-600 transition z-50">Chat with us</button>
            {isOpen && <Chat />}
        </div>
    );
};

export default ChatButton;