import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";


const LeafMap = (props) => {
    console.log(props.position)
    const [center,setCenter] = useState([props.position[0],props.position[1]])

    return ( 
    // <div className="leaflet-container">
        <MapContainer center={center} zoom={16}scrollWheelZoom={false}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker 
            position={[33.8938, 35.5018]}/>
        </MapContainer>
    //   </div>
     );
}
 
export default LeafMap;