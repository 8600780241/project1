import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import cn from "classnames";
export default function Header() {
  const location = useLocation();
  return (
    <>
    <div className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="left-top">
              <div className="email-box">
                <a href="#">
                  <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
                  youremail@gmail.com
                </a>
              </div>
              <div className="phone-box">
                <a href="tel:1234567890">
                  <i className="fa fa-phone" aria-hidden="true" /> +1 234 567 890
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="right-top">
              <div className="social-box">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-rss-square" aria-hidden="true" />
                    </a>
                  </li>
                  <ul></ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <header className="header header_style_01">
      <nav className="megamenu navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">
              <img src="/images/logos/logo4.png" height={45} alt="Logo" />
            </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link className={cn(location.pathname==="/"?"active":"")} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={cn(location.pathname==="/about"?"active":"")} to={"/about"}>About us</Link>
              </li>
              <li>
                <Link className={cn(location.pathname==="/services"?"active":"")} to={"/services"}>Our Services</Link>
              </li>
              
             
              <li>
                <Link className={cn(location.pathname==="/blogs"?"active":"")} to={"/blogs"}>blogs</Link>
              </li>
              <li>
                <Link className={cn(location.pathname==="/experties"?"active":"")} to={"/experties"}>Experties</Link>
              </li>
              <li>
                <Link className={cn(location.pathname==="/careers"?"active":"")}  to="/careers">Careers</Link>
              </li>
              <li>
                <Link className={cn(location.pathname==="/contact"?"active":"")} to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}
