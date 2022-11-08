import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube, IoLogoTwitter, IoMailOutline, IoPhonePortraitOutline, IoLocationOutline } from "react-icons/io5";
import logo from "../../thetuliplogo.svg";
import "./Footer.scss";

const Footer = () => {


    return ( 

        <div className="container">
            <div className="footer flist-row flex-col-4">
                <div className="flist-row__item">
                    <img className="footer__logo" src={logo} alt="" />
                    <p style={{ marginBottom : 0, opacity : .5 }}>Lorem ipsum dolor sit amet, consectetur </p>
                    <ul className="nav__social">
                        <li className="nav__social__item"><a href="/"><IoLogoInstagram /></a></li>
                        <li className="nav__social__item"><a href="/"><IoLogoFacebook /></a></li>
                        <li className="nav__social__item"><a href="/"><IoLogoYoutube /></a></li>
                        <li className="nav__social__item"><a href="/"><IoLogoTwitter /></a></li>
                    </ul>

                    <input type="email" className="form__field" placeholder="Your email address" />
                </div>
                <div className="flist-row__item"></div>
                <div className="flist-row__item">
                    <h4>Services</h4>
                    <ul className="nav-footer">
                        <li>Restaurant</li>
                        <li>Coffe Shop</li>
                        <li>Car Wash</li>
                        <li>Cycle Rent</li>
                        <li>Car Rent</li>
                    </ul>
                
                </div>
                <div className="flist-row__item">
                    <h4>Reach Us</h4>
                    <ul className="nav-footer">
                        <li className="nav-footer__icon"><IoMailOutline /> mail@hotel.us</li>
                        <li className="nav-footer__icon"><IoPhonePortraitOutline /> (239) 555-0108</li>
                        <li className="nav-footer__icon"><IoLocationOutline /> 6391 Elgin St. Celina, <br/>Delaware 10299</li>
                    </ul>
                </div>
            </div>
        </div>

     );


}
 
export default Footer;