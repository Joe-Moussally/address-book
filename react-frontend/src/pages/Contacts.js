import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Contact from "../components/Contact"
import Nav from "../components/Nav"
import LeafMap from "../components/LeafMap"

const Contacts = () => {

    const nav = useNavigate()
        
    const [contacts,setContacts] = useState([])


    //fetch all contacts
    useEffect(()=>{
        //check if user is logged in
        const token = localStorage.getItem('token')
        console.log(token)
        if(token == 'null'){
            nav('/login')
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

    return ( 
        <>
            <Nav />
            <div id="contacts-container" className="container">

                <h1>My Contacts</h1>

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