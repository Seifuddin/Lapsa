"use client";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const ChatButton = () => {
    return (
        <div>
            <Link href="/chat">
                <button className="fixed bottom-4 left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition z-50 flex items-center space-x-2">
                    <MessageCircle size={24} />
                    <span className="hidden md:inline">Chat</span>
                </button>
            </Link>
        </div>
    );
};

export default ChatButton;