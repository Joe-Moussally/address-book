import { useEffect, useState } from "react"
import axios from 'axios'
import Contact from "../components/Contact"

const Contacts = () => {

    const [contacts,setContacts] = useState('')

    //fetch all contacts
    useEffect(()=>{
        
        axios({
            headers:{
                authorization: localStorage.getItem('token')
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
            <div id="contacts-container" className="container">

                <h1>My Contacts</h1>

                <div id="contacts-container">
                    <Contact />
                </div>

            </div>
        </>
     );
}
 
export default Contacts;