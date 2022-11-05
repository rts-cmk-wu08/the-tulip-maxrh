import axios from "axios";
import { useState, useEffect } from "react";
import Review from "./Review";
import "./Reviews.scss";

const Reviews = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [reviews, setReviews] = useState();

    useEffect(() => {

        axios(`http://localhost:4000/reviews`)
        .then(response => setReviews(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))

    }, []);

    return ( 
        <section className="section reviews">

            {loading && <p>Loading</p>}
            {error && <p>{error}</p>}
            {reviews &&  (
                <>  
                    <header className="sHeader">
                        <h1 className="sHeader__title">{reviews.headline}</h1>
                        <p className="sHeader__desc">{reviews.text}</p>
                    </header>
                    <ul className="flist-row flex-col-3">
                        {reviews.testimonials.map(review => ( 
                            <Review review={review} key={review.id} />
                        ))}
                    </ul>
                </>
            )}

        </section>
     );
}
 
export default Reviews;