import axios from "axios";
import { useState, useEffect } from "react";
import { SplitText } from '@cyriacbr/react-split-text';
import "./Hero.scss";
import logo from "../../thetuliplogo.svg";
import Form from "../Form/Form";

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
        <section className="section hero alignfull">

            {loading && <p>Loading</p>}
            {error && <p>{error}</p>}
            {!error && hero && (

                <>

                <img className="hero__img" src={hero.image} alt="" loading="lazy" />
                <div className="container">

                    <div className="hero__content">
                        <img className="hero__logo" src={logo} alt="" loading="lazy" />
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