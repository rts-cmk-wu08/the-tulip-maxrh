import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Service = ({service}) => {

    return ( 

        <li className="flist-col__item">
            <div className="service-card flist-row flex-col-2">
                
                <div className="service-card__img flist-row__item">
                    <LazyLoadImage effect="blur" src={service.image} alt="Image Alt" />
                </div>
                
                <div className="service-card__text flist-row__item">
                    <h2 className="service-card__title">{service.name}</h2>
                    <p>{service.text1}</p>
                    <p>{service.text2}</p>
                </div>
            </div>
            
        </li>
         
     );

}
 
export default Service;