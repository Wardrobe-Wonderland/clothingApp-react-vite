import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
        <nav className="Navbar"></nav>
        <p><Link to={"/"}>Home</Link></p>
        <p><Link to={"/Men"}>Men</Link></p>
        <p><Link to={"/Women"}>Women</Link></p>
        <p><Link to={"/About"}>About</Link></p>



        </>

    )
}

export default Navbar;
