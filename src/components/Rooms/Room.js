import { IoBedOutline, IoScanOutline, IoArrowForwardOutline  } from "react-icons/io5";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Room = ({room}) => {

    return ( 

        <li className="flist-row__item">
            <article className="room-card">
                <figure>
                    <LazyLoadImage  src={room.image} effect="blur" alt="Image Alt" className="room-card__img" />
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