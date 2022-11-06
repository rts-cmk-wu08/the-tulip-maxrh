const Room = ({room}) => {

    return ( 

        <li className="flist-row__item">
            <article className="room-card">
                <figure>
                    <img src={room.image} alt="" className="room-card__img" />
                    <span className="room-card__price">${room.price}</span>
                </figure>
                <h4 className="room-card__title">{room.type}</h4>
                
                <p className="room-card__desc">{room.description}</p>
            </article>
            
        </li>
         
     );

}
 
export default Room;