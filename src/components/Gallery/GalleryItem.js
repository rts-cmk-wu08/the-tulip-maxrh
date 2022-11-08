import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const GalleryItem = ({image}) => {


    return ( 


        <li className="fmasonry__item">
            <figure>
                <LazyLoadImage effect="blur" src={image.url} alt="Image Alt" />
            </figure>

        </li>
             
    );
    
}
 
export default GalleryItem;