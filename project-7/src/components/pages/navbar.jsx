import { Link } from "react-router-dom";

export default function NAVBAR(){
    return(
        <div className="navbar">
  <Link to="/">Home</Link>;
  <Link to="/aboutus">About Us</Link>
  <Link to='/contact'>contact</Link>
</div>
    )
}