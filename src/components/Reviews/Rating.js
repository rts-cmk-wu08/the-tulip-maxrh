import { IoStarOutline, IoStar  } from "react-icons/io5";


const Rating = ({review}) => {

    return review.stars === 5 ? <span><IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar /></span>
        : review.stars === 4 ? <span><IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStarOutline /></span>
        : review.stars === 3 ? <span><IoStar /> <IoStar /> <IoStar /> <IoStarOutline /> <IoStarOutline /></span>
        : review.stars === 2 ? <span><IoStar /> <IoStar /> <IoStar /> <IoStarOutline /> <IoStarOutline /></span>
        : review.stars === 1 ? <span><IoStar /> <IoStar /> <IoStar /> <IoStarOutline /> <IoStarOutline /></span>
        : <span><IoStarOutline /> <IoStarOutline /> <IoStarOutline /> <IoStarOutline /> <IoStarOutline /></span>;
    
}

export default Rating;