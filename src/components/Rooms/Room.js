import { IoBedOutline, IoScanOutline, IoArrowForwardOutline  } from "react-icons/io5";

const Room = ({room}) => {

    return ( 

        <li className="flist-row__item">
            <article className="room-card">
                <figure>
                    <img src={room.image} alt="" className="room-card__img" />
                    <span className="room-card__price">${room.price}</span>
                    <div className="room-card__info">
                        <span><IoBedOutline /> {room.guests} Guests</span>
                        <span><IoScanOutline /> {room.size}</span>
                    </div>
                    
                </figure>
                <h4 className="room-card__title">{room.type}</h4>
                
                <p className="room-card__desc">{room.description}</p>

                <a href="/" className="room-card__link">Booking <IoArrowForwardOutline /></a>
            </article>
            
        </li>
         
     );

}
 
export default Room;