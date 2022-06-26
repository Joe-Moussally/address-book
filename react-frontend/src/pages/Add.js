import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const nav = useNavigate()

    useEffect(() => {
        //check if user is logged in
        const token = localStorage.getItem('token')
        console.log(token)
        if(token == 'null'){
            nav('/login')
        }
        console.log(token)
    },[])


    
    return ( 
        <>
            <div className="container" id="add-container">
                <div id="add-header">
                    <button id="back" onClick={()=>nav('/contacts')}>⬅Go Back</button>
                    <h1>Add New Contacts</h1>
                </div>


            </div>
        </>
     );
}
 
export default Add;