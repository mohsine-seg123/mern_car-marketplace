import { useState } from "react"; // 1. Ajout de useState
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"; // 2. Ajout de useMap
import "leaflet/dist/leaflet.css";


function ChangeView({ center, zoom }) {
  const map = useMap();
  map.flyTo(center, zoom, { duration: 1.5 }); 
  return null;
}


export default function GarageMap() {
  const garagesData = [
    {
      id: 1,
      ville: "Erfoud",
      position: [31.4351, -4.236],
      adresse: "Avenue Moulay Ismail",
    },
    {
      id: 2,
      ville: "Errachidia",
      position: [31.9316, -4.4244],
      adresse: "Route de Meknès",
    },
    {
      id: 3,
      ville: "Rissani",
      position: [31.2847, -4.2694],
      adresse: "Centre Ville",
    },
    {
      id: 4,
      ville: "Fès",
      position: [34.0333, -5.0],
      adresse: "Quartier Industriel",
    },
    {
      id: 5,
      ville: "Tanger",
      position: [35.7595, -5.834],
      adresse: "Zone Franche",
    },
    {
      id: 6,
      ville: "Casablanca",
      position: [33.5731, -7.5898],
      adresse: "Quartier Maârif",
    },
  ];

 
  const [view, setView] = useState({
    center: [31.7917, -7.0926], 
    zoom: 6,
  });

  return (
    <section className=" px-6 py-4 lg:py-8 lg:px-12 gap-5 w-full flex flex-col">
      <h2 className="text-3xl sm:mb-4 mb-2 ml-2 font-extrabold text-text">
        Our Garage
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <div className="sm:w-1/2 w-full flex border p-2 border-solid border-blue-300 rounded-xl flex-col gap-4 overflow-y-auto max-h-[300px] sm:max-h-[400px] sm:pr-4">
          {garagesData.map((garage) => (
            <div
              key={garage.id}
              onClick={() => setView({ center: garage.position, zoom: 15 })}
              className="p-4 border bg-surface rounded-xl hover:shadow-md transition-all cursor-pointer border-gray-200 hover:border-blue-500 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-text group-hover:text-blue-600">
                    {garage.ville}
                  </h3>
                  <p className="text-gray-500 flex items-center gap-2">
                    📍 {garage.adresse}
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">
                  Open
                </span>
              </div>
              <button className="mt-3 text-sm font-semibold text-blue-600 hover:underline">
                Get Directions →
              </button>
            </div>
          ))}
        </div>

        <div className="border-2 rounded-lg w-full sm:w-1/2 border-blue-400 overflow-hidden">
          <MapContainer
            center={view.center}
            zoom={view.zoom}
            className="w-full h-[400px]"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            <ChangeView center={view.center} zoom={view.zoom} />

            {garagesData.map((garage) => (
              <Marker key={garage.id} position={garage.position}>
                <Popup>
                  <strong>{garage.ville}</strong> <br /> {garage.adresse}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
