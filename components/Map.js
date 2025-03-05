"use client"; // Ensure it runs on the client side

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const LocationMap = () => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          setPosition([location.coords.latitude, location.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const customIcon = new L.Icon({
    iconUrl: "/location-icon.png", // Add a custom marker icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <div className="w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
      {position ? (
        <MapContainer
          center={position}
          zoom={13}
          className="w-full h-full z-0"
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>Your Location</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p className="text-center text-gray-500">Fetching location...</p>
      )}
    </div>
  );
};

export default LocationMap;