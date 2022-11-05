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

        <li className="flist-row__item">
            <div className="spot-card">
                <span className="spot-card__icon"><SpotIcon /></span>
                <h4 className="spot-card__title">{spot.name}</h4>
                <p>{spot.text}</p>
            </div>
        </li>
             
    );
    
}
 
export default Spot;