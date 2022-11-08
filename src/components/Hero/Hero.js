import axios from "axios";
import { useState, useEffect } from "react";
import logo from "../../thetuliplogo.svg";
import Form from "../Form/Form";
import "./Hero.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Hero = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [hero, setHero] = useState();


    useEffect(() => {
        axios(`http://localhost:4000/hero`)
        .then(response => setHero(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))

    }, []);

    return ( 
        <section className="hero alignfull">

            {loading && <p>Loading</p>}
            {error && <p>{error}</p>}
            {!error && hero && (

                <>

                <LazyLoadImage className="hero__img" effect="blur" src={hero.image} alt="Image Alt" />

                <div className="container">

                    <div className="hero__content">
                        <img className="hero__logo" src={logo} alt="" />
                        <h1 className="hero__title">
                            {hero.headline} <br/> <span>{hero.headline2}</span>
                        </h1>
                        <button className="btn btn-primary">Book Now</button>
                    </div> 

                    <div className="hero__form">
                        <Form />
                    </div>
                </div>

                </>
            )}

        </section>
     );
}
 
export default Hero;