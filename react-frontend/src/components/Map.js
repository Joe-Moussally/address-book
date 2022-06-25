import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const Map = (props) => {

    const { isLoaded } = useLoadScript({gooleMapsApiKey: 'AIzaSyChDANLoZ4szGxQwPzE2HNtyBypDQ2N2BA'})

    if (!isLoaded) return <div>Loading...</div>

    return (
        <GoogleMap zoom={10} center={{lat: props.lat, lng: props.lng}} mapContainerClassName="map-container"></GoogleMap>
    );
}
 
export default Map;