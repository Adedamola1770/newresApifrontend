import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/4a7cbea4-4495-44e8-8c0b-6da417793617.jpeg";
import navImage from "../assets/52115f39-bcdb-4205-8414-87e19bdc6498.jpeg";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="border-bottom border-2 border-primary ">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <Link to="/">
            <img src={navLogo} alt="navLogo" className="img-fluid" />
          </Link>
        </div>
        <div>
          <ul className="d-flex align-items-center ul gap-5">
            <li>
              <Link to="NewUser" className="list">
                Newuser
              </Link>
            </li>
            <li>
              <Link to="AllUser" className="list">
                Alluser
              </Link>
            </li>
            <li className="mt-3">
              <img
                src={navImage}
                alt="navImage"
                className="d-none d-lg-block"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
