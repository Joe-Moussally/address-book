import axios from 'axios'
import LeafMap from '../pages/LeafMap'

const Contact = (props) => {

    let url = 'https://maps.google.com/maps?q='+props.info.location.lg+','+props.info.location.lt+'&hl=en&z=14&amp;output=embed'

    //function that removes the contacts selected
    const handleRemove = (e) => {
        let id = e.target.id
        axios({
            headers:{'authorization':localStorage.getItem('token')},
            method:'DELETE',
            data:{
                'id':id
            },
            url:'http://localhost:27017/api/contact'
        }).then((Response) => {
            document.getElementById(id).classList.toggle('deleted')
            setTimeout(()=>{
                document.getElementById(id).style.display = 'none'
            },300)
            
        })
    }
    
    return ( 
        <div className="contact-card" id={props.info._id}>

            <div className="card-header">
                <h2>{props.info.name}</h2>
                <button
                id={props.info._id}
                onClick={handleRemove}
                >Remove Contact</button>
            </div>

            <div className="info-container">
                <div><span className="info-titles">-Email</span> <i>{props.info.email}</i></div>
                <div><span className="info-titles">-Number</span> <i>{props.info.number}</i></div>
                <div><span className="info-titles">-Relationship Status</span> <i>{props.info.status}</i></div>
            </div>

            {/* <iframe className="maps" src={'https://maps.google.com/maps?q=' + props.info.location.lt + ',' + props.info.location.lg + '&t=&z=15&ie=UTF8&iwloc=&output=embed'} width="100%" height="250" frameBorder="0" scrolling="no"></iframe> */}
            <LeafMap position={[33.8938, 35.5018]}/>

        </div>
     );
}
 
export default Contact;