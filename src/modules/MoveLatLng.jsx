import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import "./styles.css";

export default function MousMove() {
  const position = [51.505, -0.09];
  const [map, setMap] = useState(null);
   const [coords, setCoords] = useState({});

  useEffect(() => {
    if (!map) return;

    map.addEventListener("mousemove", (e) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
  }, [map]);

  const { lat, lng } = coords;
  console.log("javad", { lat, lng });
  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "90vh" }}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      {/* {lat && (
        <div>
          <b>latitude</b>: {lat?.toFixed(4)} <br />
          <b>longitude</b>: {lng?.toFixed(4)}
        </div>
      )} */}
    </>
  );
}
