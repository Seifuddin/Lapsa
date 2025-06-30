"use client";

import {
  Monitor,
  Smartphone,
  Code2,
  Paintbrush,
  Contact,
  FileText,
  CalendarDays,
  BookOpen,
  FileBadge,
  Sticker,
  Image,
  Printer,
  ScanLine,
} from "lucide-react";

const services = [
  { label: "Web Design", icon: <Monitor className="w-4 h-4" /> },
  { label: "Mobile App Development", icon: <Smartphone className="w-4 h-4" /> },
  { label: "Software Development", icon: <Code2 className="w-4 h-4" /> },
  { label: "Graphic Design", icon: <Paintbrush className="w-4 h-4" /> },
  { label: "Business Cards", icon: <Contact className="w-4 h-4" /> },
  { label: "Fliers", icon: <FileText className="w-4 h-4" /> },
  { label: "Calendars", icon: <CalendarDays className="w-4 h-4" /> },
  { label: "Brochures", icon: <BookOpen className="w-4 h-4" /> },
  { label: "Magazines", icon: <FileBadge className="w-4 h-4" /> },
  { label: "Stickers", icon: <Sticker className="w-4 h-4" /> },
  { label: "Banners", icon: <Image className="w-4 h-4" /> },
  { label: "Digital Printing", icon: <Printer className="w-4 h-4" /> },
  { label: "Large Format Printing", icon: <ScanLine className="w-4 h-4" /> },
];

export default function ServiceMarquee() {
  const marqueeItems = [...services, ...services];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 py-4 group">
      <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-white text-gray-800 rounded-full px-4 py-1 mx-3 shadow-md hover:bg-yellow-300 hover:text-black transition duration-300"
          >
            <span className="mr-2 text-blue-600">{item.icon}</span>
            <span className="text-sm font-medium whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
