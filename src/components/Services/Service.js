const Service = ({service}) => {

    return ( 

        <li className="flist-col__item">
            <div className="service-card flist-row flex-col-2">
                
                <div className="service-card__img flist-row__item">
                    <img src={service.image} alt=""/>
                </div>
                
                <div className="service-card__text flist-row__item">
                    <h2>{service.name}</h2>
                    <p>{service.text1}</p>
                    <p>{service.text2}</p>
                </div>
            </div>
            
        </li>
         
     );

}
 
export default Service;