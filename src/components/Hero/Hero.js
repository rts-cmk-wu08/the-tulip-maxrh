import axios from "axios";
import { useState, useEffect } from "react";
import "./Hero.scss";
import logo from "../../thetuliplogo.svg";

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
        <section className="section hero">
            {loading && <p>Loading</p>}
            {error && <p>{error}</p>}
            {!error && hero && (

                <div className="hero__content">  
                    <img className="hero__img" src={hero.image} alt="" />
                    <img className="logo" src={logo} alt="" />
                    <h1>{hero.headline}</h1>
                </div>

            )}
        </section>
     );
}
 
export default Hero;