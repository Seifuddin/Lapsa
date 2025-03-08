"use client";
import { useState, useEffect, useRef } from "react";
import { db, collection, addDoc, onSnapshot } from "@/components/firebase";
import { Timestamp } from "firebase/firestore";
import { Send, X } from "lucide-react";

const Chat = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
            setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;
        await addDoc(collection(db, "messages"), { text: input, timestamp: Timestamp.now() });
        setInput("");
    };

    return (
        <div className="fixed bottom-4 right-4 w-80 md:w-96 bg-white shadow-2xl border border-gray-300 rounded-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between bg-blue-500 text-white p-3">
                <h3 className="text-lg font-semibold">Live Chat</h3>
                <button onClick={onClose} className="hover:bg-blue-600 p-1 rounded-md">
                    <X size={20} />
                </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-64">
                {messages.map((msg) => (
                    <div key={msg.id} className="flex">
                        <p className="bg-gray-100 text-gray-800 p-2 rounded-lg max-w-[75%] shadow">
                            {msg.text}
                        </p>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Box */}
            <div className="flex items-center p-3 bg-gray-100 border-t">
                <input
                    type="text"
                    className="flex-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button
                    onClick={sendMessage}
                    className="ml-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition"
                >
                    <Send size={20} />
                </button>
            </div>
        </div>
    );
};

export default Chat;