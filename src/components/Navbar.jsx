import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
        <div>
        <nav className="Navbar">
        <p><Link to={"/"}>Home</Link></p>
        <p><Link to={"/male"}>Men</Link></p>
        <p><Link to={"/female"}>Women</Link></p>
        <p><Link to={"/about"}>About</Link></p>
        </nav>
        </div>



        </>

    )
}

export default Navbar;
