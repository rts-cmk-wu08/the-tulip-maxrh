import axios from "axios";
import { useState, useEffect } from "react";
import Service from "./Service";


const Services = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [services, setServices] = useState();


    useEffect(() => {
        axios(`http://localhost:4000/services`)
        .then(response => setServices(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))

    }, []);

    return ( 
        <section className="section services">

            {loading && <p>Loading</p>}
            {error && <p>{error}</p>}
            {services &&  (
                <>  
                    <header className="sHeader">
                        <h1 className="sHeader__title">{services.headline}</h1>
                        <p className="sHeader__desc">{services.text}</p>
                    </header>
                    <ul className="flist-row">
                        {services.facilities.map(service => ( 
                            <Service service={service} key={service.id} />
                        ))}
                    </ul>
                </>
            )}

        </section>
     );
}
 
export default Services;