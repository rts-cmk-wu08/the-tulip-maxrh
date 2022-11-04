const Room = ({room}) => {

    return ( 

        <li className="flist-row__item">
            <article className="article-teaser">
                <img src={room.image} alt=""/>
                <h4>{room.type}</h4>
                <span>{room.price}</span>
                <p>{room.description}</p>
            </article>
            
        </li>
         
     );

}
 
export default Room;