import axios from "axios";
import { useState, useEffect } from "react";
import GalleryItem from "./GalleryItem";
import "./Gallery.scss";


const Gallery = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [gallery, setGallery] = useState();


    useEffect(() => {
        axios(`http://localhost:4000/gallery`)
        .then(response => setGallery(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))

    }, []);
    
    return ( 
        <section className="section gallery">

            {loading && <p>Loading</p>}
            {error && <p>{error}</p>}
            {gallery &&  (
                <>  
                    <header className="sHeader">
                        <h1 className="sHeader__title">{gallery.headline}</h1>
                        <p className="sHeader__desc">{gallery.text}</p>
                    </header>
                    <ul className="fmasonry">
                        {gallery.images.map(galleryItem => ( 
                            <GalleryItem image={galleryItem} key={galleryItem.id} />
                        ))}
                    </ul>
                </>
            )}

        </section>
     );
}
 
export default Gallery;