import axios from "axios";
import { useState, useEffect } from "react";
import { SplitText } from "@cyriacbr/react-split-text";
import Room from "./Room";
import "./Rooms.scss";


const Rooms = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [rooms, setRooms] = useState();


    useEffect(() => {
        axios(`http://localhost:4000/rooms`)
        .then(response => setRooms(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))

    }, []);

    return ( 
        <section className="rooms">

            {loading && <p>Loading</p>}
            {error && <p>{error}</p>}
            {rooms &&  (
                <>  
                    <header className="sHeader">
                        <h1 className="sHeader__title">
                            <SplitText WordWrapper={({ children }) => (
                                <span className="wrapper"> 
                                    {children}
                                </span>
                                )}>
                                {rooms.headline}
                            </SplitText>
                        </h1>
                        <p className="sHeader__desc">{rooms.text}</p>
                    </header>
                    <ul className="flist-row flex-col-3">
                        {rooms.roomtypes.map(room => ( 
                            <Room room={room} key={room.id} />
                        ))}
                    </ul>
                </>
            )}

        </section>
     );
}
 
export default Rooms;