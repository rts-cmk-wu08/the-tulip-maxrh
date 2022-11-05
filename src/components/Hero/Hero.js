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

                <img className="hero__img" src={hero.image} alt="" />

                <div className="container">

                    <div className="hero__content">
                        <img className="hero__logo" src={logo} alt="" />
                        <h1 className="hero__title">
                            <SplitText LineWrapper={({ children }) => (
                                <span className="wrapper">
                                    {children}
                                </span>
                                )} >

                                {hero.headline}

                            </SplitText>
                        </h1>
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