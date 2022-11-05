const GalleryItem = ({image}) => {


    return ( 


        <li className="fmasonry__item">
            <figure>
                <img src={image.url} alt="" loading="lazy" />
            </figure>

        </li>
             
    );
    
}
 
export default GalleryItem;