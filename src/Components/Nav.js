import {FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";
const Nav = ()=>{
    return(
        <div className="nav_container dis_flex flex_center justify">
            <div className="logo">
                
                <h2>logo</h2>

            </div>
            <div className="home dis_flex gap_25px bold">
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
            </div>
            <div className="dis_flex gap_25px font_icon">
                <FaFacebookF/>
                <FaTwitter/>
                <FaInstagram/>
            </div>
        </div>
    );
}
export default Nav;