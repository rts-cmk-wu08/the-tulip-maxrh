const Service = ({service}) => {

    return ( 

        <li className="flist-row__item">
            <article className="article-teaser">
                <img src={service.image} alt=""/>
                <h4>{service.name}</h4>
                <p>{service.text}</p>
            </article>
            
        </li>
         
     );

}
 
export default Service;