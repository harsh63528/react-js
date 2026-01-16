import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="flex h-2 w-screen bg-blue-500 justify-around items-center text-white text-lg font-bold">
            <Link to="/">Home</Link> 
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            <Link to='/tasks'>Tasks</Link>
        </nav>
    )
}