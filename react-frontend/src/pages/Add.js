import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

//importing leaflet dependencies
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import L from 'leaflet'
import { map } from "leaflet";


const Add = () => {
    const nav = useNavigate()

    useEffect(() => {
        //check if user is logged in
        const token = localStorage.getItem('token')
        if(token == 'null'){
            nav('/login')
        }
    },[])


    //function to handle the sumbission and adding
    //contact using the api
    const handleSubmit = () => {
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let number = document.getElementById('number').value
        let status = document.getElementById('status').value

        //check if inputs are empty
        if(name==''||email==''||number=='') return

        let body = {
            "name": name,
            "number": number,
            "status": status,
            "email": email,
            "location": {
                "lg": 123311.23,
                "lt": 122884.21312
            }
        }
        console.log(body)
        
        axios({
            headers:{'authorization':localStorage.getItem('token')},
            method:'POST',
            data:body,
            url:'http://localhost:27017/api/contact'
        }).then((Response) => {
            nav('/contacts')
        })
    }

    function MyComponent() {
        const map = useMapEvent({
          click: (e) => {
            const { lat, lng } = e.latlng;
            L.marker([lat, lng]).addTo(map);
          }
        });
        return null;
    }
    
    return ( 
        <>
            <div className="container" id="add-container">
                <div id="add-header">
                    <button id="back" onClick={()=>nav('/contacts')}>⬅Go Back</button>
                    <h1>Add New Contacts</h1>
                </div>

                <div className="input-container">
                    <label>Full Name</label>
                    <input id="name" type="text" placeholder="John Doe"></input>
                </div>

                <div className="input-container">
                    <label>Email</label>
                    <input id="email" type="email" placeholder="john@doe.com"></input>
                </div>

                <div className="input-container">
                    <label>Phone Number</label>
                    <input id="number" type="number" placeholder="70123456"></input>
                </div>

                <div className="input-container">
                    <label>Relationship Status</label>
                    <select name="status" id="status">
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="complicated">Complicated</option>
                    </select>
                </div>

                <div className="input-container">
                <label>Location</label>

                <MapContainer  center={[0,0]} zoom={1}scrollWheelZoom={false} id="leafmap">
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[0,0]} draggable={true}/>
                    <MyComponent />
                </MapContainer>
                </div>

                <button id="add-btn" onClick={handleSubmit}>Add Contact</button>

            </div>
        </>
     );
}
 
export default Add;