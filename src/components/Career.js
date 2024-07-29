import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./PopUp";

const jobRoles = ["React Developer", "Java Developer", "Node.js Developer", "Full Stack Developer", "MERN Stack Developer", "DevOps Engineer"];
const Carrier = ()=> {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
      setShowPopup(!showPopup);
  };
  return (
    <>

    <Popup show={showPopup} onClose={togglePopup} />
      <div className="banner-area banner-bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner">
                <h2>careers</h2>
                <ul className="page-title-link">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <a href="#">careers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="carrier" className="section wb">
        <div className="container">
          <div className="row text-center">
            {jobRoles.map((job) => (
              <div className="col-md-4 col-sm-6">
                <div className="carrier-item">
                  <div className="carrier-icon">
                    <span className="icon icon-display" />
                  </div>
                  <div className="carrier-text">
                    <h3>
                      {" "}
                      <p>{job}</p>
                    </h3>
                    <p className="px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt. </p>
                  </div>
                  <button  className="btn btn-light btn-radius mb-3 btn-brd grd1" onClick={togglePopup}>
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* end container */}
      </div>
    </>
  );
}

export default Carrier;
