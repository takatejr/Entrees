import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const InternalMap = () => {
	return (
		<MapContainer center={[20, 78]} zoom={5} scrollWheelZoom={false} className="w-full h-full">
			<TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
		</MapContainer>
	);
};
