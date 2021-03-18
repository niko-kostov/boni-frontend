import { MapContainer, TileLayer, Rectangle, Polygon } from 'react-leaflet'
import "./HomeMap.css"
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import * as utilsCoordinates from './../utils/coordinates';

let DefaultIcon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -35],
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


const HomeMap = () => {
    return(
        <div id="map">
            <MapContainer center={utilsCoordinates.skopjeCoordinates}
                          zoom={12}
                          style={{ height: "100%", width: "100%" }}
                          scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Polygon pathOptions={utilsCoordinates.greenOption} positions={utilsCoordinates.gjorchePetrov} />
                <Polygon pathOptions={utilsCoordinates.greenOption} positions={utilsCoordinates.karposhAndCentar} />
                <Polygon pathOptions={utilsCoordinates.greenOption} positions={utilsCoordinates.centarAndAerodrom} />
                <Polygon pathOptions={utilsCoordinates.greenOption} positions={utilsCoordinates.chairButel} />
            </MapContainer>
        </div>
    )
}

export default HomeMap
