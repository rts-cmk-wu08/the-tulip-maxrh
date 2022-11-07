import axios from "axios";
import { useState, useEffect } from "react";
import { IoChevronForwardOutline, IoChevronBackOutline  } from "react-icons/io5";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./Slideshow.scss";

const properties = {
    prevArrow: <button className="slideshow__arrow"><IoChevronBackOutline /></button>,
    nextArrow: <button className="slideshow__arrow"><IoChevronForwardOutline /></button>
}

const indicators = () => ( <span className="indicator"></span> );


const Slideshow = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [slideshow, setSlideshow] = useState();

    useEffect(() => {
        axios(`http://localhost:4000/services`)
        .then(response => setSlideshow(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))

    }, []);
    
    return ( 
        <section className="slideshow alignfull">

            {loading && <p>Loading</p>}
            {error && <p>{error}</p>}
            {slideshow &&  (
                <div className="slide-container">  
                    <Slide indicators={indicators} {...properties} transitionDuration={700} easing={"ease-out"}>
                        {slideshow.facilities.map(slideImage => (
                            <div className="each-slide" key={slideImage.id}>
                                <img src={slideImage.image} alt="" />
                            </div>
                        ))} 
                    </Slide>
                </div>
            )}

        
        </section>
     );
}

   
 
export default Slideshow;