const Contact = (props) => {
    console.log(props.info)
    return ( 
        <>
            <h2>{props.info.name}</h2>

            <div className="info-container">
                <div><span className="info-titles">-Email</span> <i>{props.info.email}</i></div>
                <div><span className="info-titles">-Number</span> <i>{props.info.number}</i></div>
                <div><span className="info-titles">-Relationship Status</span> <i>{props.info.status}</i></div>

            </div>
        </>
     );
}
 
export default Contact;