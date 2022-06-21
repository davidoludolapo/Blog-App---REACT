import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import { useState } from "react";

function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const [dropdown, setDropdown] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topleft">
        <h3>Bloggy</h3>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="about/">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <Link to="/settings">
            <img src={PF + user.profilePic} alt="" className="topImg" />
          </Link>
        ) : (
          <div className="dropdown">
            
            <i class="fa-solid fa-lock"></i>
          
            <div className="dropdown-content">
              <Link className="link" to="/login">
                Login
              </Link>
              <hr />
              <Link className="link" to="/register">
                Register
              </Link>
            </div>
          </div>
        )}
  
      </div>
    </div>
  );
}

export default Topbar;

{
  /* <ul className="topList">
            
              <img
                src="https://i.ibb.co/sW5qvV7/12.jpg"
                alt=""
                className="topImg dropImg"
              />
              <div className="dropdown-content">
                <Link className="link" to="/login">
                  Login
                </Link>
                <Link className="link" to="/register">
                  Register
                </Link>
              </div>
        
          </ul> */
}
