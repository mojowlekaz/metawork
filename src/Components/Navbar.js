import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";


function Navbar(){
        const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return(

    
    <nav>
          <span>METAWORK</span>
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Arcade</a>
            </li>
            <li>
                <a href="">Play To Earn</a>
            </li>
            <li>
                <a href="">Jobs</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Train To Earn</a>
            </li>

            <button>Connect</button>
        </ul>
        </nav>
        
    )
}
export default Navbar;

