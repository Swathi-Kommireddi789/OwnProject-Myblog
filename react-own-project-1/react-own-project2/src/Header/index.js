import { Link } from "react-router-dom";
import "./index.css"

const Header = () => (
    <>
    <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>

    
     <ul className="nav-menu">
       <li>
         <Link className="nav-link" to="/home">Home</Link>
       </li>
       <li>
         <Link className="nav-link" to="/profile">Profile</Link>
       </li>
       <li>
         <Link className="nav-link" to="/domainpage">Domainpage</Link>
       </li>
     </ul>
     </div>
     </nav>
     </>
)

export default Header