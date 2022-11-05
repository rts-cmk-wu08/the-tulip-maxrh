const GalleryItem = ({image}) => {


    return ( 


        <li className="fmasonry__item">
            <figure>
                <img src={image.url} alt="" />
            </figure>

        </li>
             
    );
    
}
 
export default GalleryItem;