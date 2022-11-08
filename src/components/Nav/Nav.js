import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube, IoLogoTwitter } from "react-icons/io5";
import "./Nav.scss";

const Nav = () => {
    return ( 
        <div className="container">
            <nav className="nav">

                <ul className="nav__menu">
                    <li className="nav__menu__item active"><a href="/" className="active">Home</a></li>
                    <li className="nav__menu__item"><a href="/rooms">Rooms & Suites</a></li>
                    <li className="nav__menu__item"><a href="/services">Services</a></li>
                    <li className="nav__menu__item"><a href="/about">About US</a></li>
                    <li className="nav__menu__item"><a href="/booking">Booking</a></li>
                </ul>

                <ul className="nav__social">
                    <li className="nav__social__item"><a href="/"><IoLogoInstagram /></a></li>
                    <li className="nav__social__item"><a href="/"><IoLogoFacebook /></a></li>
                    <li className="nav__social__item"><a href="/"><IoLogoYoutube /></a></li>
                    <li className="nav__social__item"><a href="/"><IoLogoTwitter /></a></li>
                </ul>

            </nav>
        </div>

    );
}
 
export default Nav;