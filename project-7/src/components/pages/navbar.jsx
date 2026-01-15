import { Link } from "react-router-dom";

export default function NAVBAR(){
    return(
        <div className="navbar  flex gap-2 justify-end font-bold  bg-gray-500">
  <Link to="/">Home</Link>
  <Link to="/aboutus">About Us</Link>
  <Link to='/contact'>contact</Link>
</div>
    )
}