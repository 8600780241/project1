import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="widget clearfix">
              <div className="widget-title">
                <img src="images/logos/logo-2.png" alt="" />
              </div>
              <p>
                {" "}
                Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis
                nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus
                molestie. Cum sociis natoque penatibus et magnis dis montes.
              </p>
              <p>
                Sed fermentum est vitae rhoncus molestie. Cum sociis natoque
                penatibus et magnis dis montes.
              </p>
            </div>
            {/* end clearfix */}
          </div>
          {/* end col */}
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="widget clearfix">
              <div className="widget-title">
                <h3>Pages</h3>
              </div>
              <ul className="footer-links hov">
                <li>
                  <a href="#">
                    Home <span className="icon icon-arrow-right2" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Blog <span className="icon icon-arrow-right2" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Pricing <span className="icon icon-arrow-right2" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    About <span className="icon icon-arrow-right2" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Faq <span className="icon icon-arrow-right2" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Contact <span className="icon icon-arrow-right2" />
                  </a>
                </li>
              </ul>
              {/* end links */}
            </div>
            {/* end clearfix */}
          </div>
          {/* end col */}
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="footer-distributed widget clearfix">
              <div className="widget-title">
                <h3>Subscribe</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which one know this tricks.
                </p>
              </div>
              <div className="footer-right">
                <form method="get" action="#">
                  <input placeholder="Subscribe our newsletter.." name="search" />
                  <i className="fa fa-envelope-o" />
                </form>
              </div>
            </div>
            {/* end clearfix */}
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </footer>
    {/* end footer */}
    <div className="copyrights">
      <div className="container">
        <div className="footer-distributed">
          <div className="footer-left">
            <p className="footer-company-name">
              All Rights Reserved. © 2018 <a href="#">GoodWEB</a> Design By :
              <a href="https://html.design/">html design</a>
            </p>
          </div>
        </div>
      </div>
      {/* end container */}
    </div>
    {/* end copyrights */}
    <a href="#" id="scroll-to-top" className="dmtop global-radius">
      <i className="fa fa-angle-up" />
    </a>
    </>
  )
}
