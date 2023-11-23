import React from "react";
import hero from "../assets/bb337cd8-da13-4546-9331-b3e844fca379.jpeg";
import hero2 from "../assets/f0041d29-78f0-471b-a5b2-e45e30c64af6.jpeg";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <main className="container pt-5">
      <div className="row justify-content-between align-items-center pb-4">
        <div className="col-sm-12 col-md-4 div-1">
          <img src={hero} alt="hero img" className="img-fluid img-thumbnail rounded shadow-lg w-100" />
        </div>
        <div className="col-sm-12 col-md-6">
          <h2>
            Improve Productivity By Managing <span className="text-danger">Your Users</span>
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            harum nulla nobis, consectetur blanditiis eum ut voluptatum quae!
            Alias voluptas, quos maxime ducimus commodi quasi, ullam nam
            pariatur quo suscipit a inventore perspiciatis. Ipsam quae excepturi
            corporis magni ea non cumque laboriosam ut aut! Repellendus, nostrum
            nobis corporis rerum sunt quo provident, assumenda expedita,
            asperiores est excepturi soluta ullam inventore laborum eaque
            quisquam doloribus ab explicabo cum molestiae atque ratione.
          </p>
          <div className="d-flex gap-5">
          <button className="btn btn-primary btn-lg ">
              <Link to="NewUser" className="text-decoration-none text-light">
                Newuser
              </Link>
            </button>
          <button className="btn btn-primary btn-lg">All Users</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
