import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import "./AddressMap.css"
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {useMemo, useRef, useState} from "react";
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

let DefaultIcon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -35],
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const AddressMap = (props) => {

    const [position, setPosition] = useState({
        lat: props.location.locationLatitude,
        lng: props.location.locationLongitude
    });
    const markerRef = useRef(null);

    const eventHandlers = useMemo(() => ({
        dragend() {
            const marker = markerRef.current
            if (marker != null) {
                setPosition(marker.getLatLng());
                debugger;
                props.updateCoordinates(props.addressId, {
                    latitude: marker.getLatLng().lat,
                    longitude: marker.getLatLng().lng
                })
            }
        }
    }), []);

    return (
        <div id="map">
            {props.location ? <MapContainer
                center={position}
                zoom={15}
                style={{height: "100%"}}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    draggable={true}
                    eventHandlers={eventHandlers}
                    ref={markerRef}
                    position={position}>
                    <Popup minWidth={90}>
                        <span>
                            This is your address!
                        </span>
                    </Popup>
                </Marker>
            </MapContainer> : null}

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCoordinates: (addressId, location) => dispatch(actions.updateCoordinates(addressId, location))
    }
}

export default connect(null, mapDispatchToProps)(AddressMap);
