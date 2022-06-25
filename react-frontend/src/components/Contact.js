import Map from "./Map";

const Contact = (props) => {

    let url = 'https://maps.google.com/maps?q='+props.info.location.lg+','+props.info.location.lt+'&hl=en&z=14&amp;output=embed'
    console.log(document.getElementsByClassName('maps'))
    
    return ( 
        <div className="contact-card">

            <h2>{props.info.name}</h2>

            <div className="info-container">
                <div><span className="info-titles">-Email</span> <i>{props.info.email}</i></div>
                <div><span className="info-titles">-Number</span> <i>{props.info.number}</i></div>
                <div><span className="info-titles">-Relationship Status</span> <i>{props.info.status}</i></div>
            </div>

            <Map lat={props.info.location.lt} lng={props.info.location.lg}/>

            <iframe className="maps" src={'https://maps.google.com/maps?q=' + props.info.location.lt + ',' + props.info.location.lg + '&t=&z=15&ie=UTF8&iwloc=&output=embed'} width="100%" height="250" frameBorder="0" scrolling="no"></iframe>
            {/* <iframe 
  width="300" 
  height="170" 
  frameborder="0" 
  scrolling="no" 
  marginheight="0" 
  marginwidth="0" 
  src="https://maps.google.com/maps?q='+YOUR_LAT+','+YOUR_LON+'&hl=es&z=14&amp;output=embed"
 >
 </iframe> */}

        </div>
     );
}
 
export default Contact;