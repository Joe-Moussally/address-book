import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Contact from "../components/Contact"
import LeafMap from "../components/LeafMap"

const Contacts = () => {

    const nav = useNavigate()
        
    const [contacts,setContacts] = useState([])

    //fetch all contacts
    useEffect(()=>{

        const token = localStorage.getItem('token')

        if(!token){
            nav('/')
        }
        axios({
            headers:{
                authorization: token
            },
            method:'GET',
            url: 'http://localhost:27017/api/contact'
        }).then((Response) => {
            console.log(Response.data.contacts)
            setContacts(Response.data.contacts)
        })
    },[])

    const handleLogout = () => {
        nav('/login')
        localStorage.setItem('token',null)
    }

    return ( 
        <>
            <div id="contacts-container" className="container">
                <h1>My Contacts</h1>

                <button id="add-contact-btn">Add Contact</button>
                <button id="logout-btn" onClick={handleLogout}>Log Out</button>                

                <div>
                    {
                        contacts.map(contact => (
                            <Contact info={contact} key={contact._id}/>
                        ))
                    }
                </div>

            </div>
        </>
     );
}
 
export default Contacts;