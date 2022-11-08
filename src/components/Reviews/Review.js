import Rating from "./Rating";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Review = ({review}) => {

    return ( 

        <li className="flist-row__item">
            <div className="review-card">
                <div className="review-card__box">
                    <p>{review.text}</p>
                    <Rating review={review} key={review.id} />
                </div>
                <div className="review-card__author">
                    <LazyLoadImage effect="blur" src={review.imageUrl} alt="Image Alt" />
                    <h5>{review.name}</h5>
                    <p>{review.handle}</p>
                </div>
            </div>
        </li>
             
    );
    
}
 
export default Review;