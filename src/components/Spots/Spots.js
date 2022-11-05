import axios from "axios";
import { useState, useEffect } from "react";
import Spot from "./Spot";
import "./Spots.scss";

const Spots = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [spots, setSpots] = useState();


    useEffect(() => {
       

        axios(`http://localhost:4000/spots`)
        .then(response => setSpots(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))

   

    }, []);

    return ( 
        <section className="section spots">

            {loading && <p>Loading</p>}
            {error && <p>{error}</p>}
            {spots &&  (
                <>  
                    <header className="sHeader">
                     
                    </header>
                    <ul className="flist-row flex-col-4">
                        {spots.map(spot => ( 
                            <Spot spot={spot} key={spot.id} />
                        ))}
                    </ul>
                </>
            )}

        </section>
     );
}
 
export default Spots;