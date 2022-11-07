import axios from "axios";
import { useState, useEffect } from "react";
import { SplitText } from "@cyriacbr/react-split-text";
import Service from "./Service";
import "./Services.scss";

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
        <section className="services">

            {loading && <p>Loading</p>}
            {error && <p>{error}</p>}
            {services &&  (
                <>  
                    <header className="sHeader">
                        <h1 className="sHeader__title">
                     
                            <SplitText WordWrapper={({ children }) => (
                                <span className="wrapper"> 
                                    {children}
                                </span>
                                )}>
                                {services.headline}
                            </SplitText>
                           
                        </h1>
                        <p className="sHeader__desc">{services.text}</p>
                    </header>
                    <ul className="flist-col">
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