"use client"
import { useState, useEffect } from "react";
import { db, collection, addDoc, onSnapshot } from "@/components/firebase";
import { Timestamp } from "firebase/firestore";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
            setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });

        return () => unsubscribe();
    }, []);

    const sendMessage = async () => {
        if(!input.trim()) return;
        await addDoc(collection(db, "messages"), { text: input, Timestamp:Date.now() });
        setInput("");
    };

    return (
        <div className="fixed, bottom-4 right-4 w-80 bg-white p-4 shadow-lg border rounded">
            <div className="h-60 overflow-y-auto">
                {messages.map((msg) => (
                    <p key={msg.id} className="p=2 bg-gray-100 my-1 rounded">{msg.text}</p>
                ))}
            </div>

            <div className="flex-1 mt-2">
                <input
                    type="text"
                    className="flex-1 p-2 border rounded-1"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />

                <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded-r">Send</button>
            </div>
        </div>
    );
};

export default Chat