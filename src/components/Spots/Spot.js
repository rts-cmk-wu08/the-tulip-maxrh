import { IoRestaurantOutline, IoCarOutline, IoHeartOutline, IoWifiOutline, IoTennisballOutline, IoBeerOutline, IoStarOutline, IoGameControllerOutline } from "react-icons/io5";


const components = {
    IoRestaurantOutline,
    IoCarOutline,
    IoHeartOutline,
    IoWifiOutline, 
    IoTennisballOutline,
    IoBeerOutline,
    IoStarOutline,
    IoGameControllerOutline,
}

const Spot = ({spot}) => {
    
    const SpotIcon = components[spot.icon]

    if (!SpotIcon) {

        return ( <><p>loading..</p></> );

    } 

    return ( 

        <>
            
            <SpotIcon />
    
        </>
             
    );
    
}
 
export default Spot;