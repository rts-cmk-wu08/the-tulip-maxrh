import Rating from "./Rating";

const Review = ({review}) => {

    return ( 

        <li className="flist-row__item">
            <div className="review-card">
                <div className="review-card__box">
                    <p>{review.text}</p>
                    <span><Rating review={review} key={review.id} /></span>
                </div>
                <div className="review-card__author">
                    <img src={review.imageUrl} alt="" />
                    <h5>{review.name}</h5>
                    <p>{review.handle}</p>
                </div>
            </div>
        </li>
             
    );
    
}
 
export default Review;