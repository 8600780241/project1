import React from 'react'

export default function Services() {
  return (
    <>
  <div className="banner-area banner-bg-1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="banner">
            <h2>Our Services</h2>
            <ul className="page-title-link">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="about" className="section wb">
    <div className="container">
      <div className="row text-center">
        <div className="col-md-3 col-sm-6">
          <div className="about-item">
            <div className="about-icon">
              <span className="icon icon-display" />
            </div>
            <div className="about-text">
              <h3>
                {" "}
                <a href="#">Lorem ipsum dolor. </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur ea, quis magnam deserunt.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="about-item">
            <div className="about-icon">
              <span className="icon icon-database" />
            </div>
            <div className="about-text">
              <h3>
                {" "}
                <a href="#">Lorem ipsum dolor. </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur ea, quis magnam deserunt.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="about-item">
            <div className="about-icon">
              <span className="icon icon-magic-wand" />
            </div>
            <div className="about-text">
              <h3>
                {" "}
                <a href="#">Lorem ipsum dolor. </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur ea, quis magnam deserunt.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="about-item">
            <div className="about-icon">
              <span className="icon icon-cloud" />
            </div>
            <div className="about-text">
              <h3>
                {" "}
                <a href="#">Lorem ipsum dolor. </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur ea, quis magnam deserunt.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end container */}
  </div>
  {/* end section */}
  <div id="services" className="parallax section lb">
    <div className="container">
      <div className="section-title text-center">
        <h3>Our Service</h3>
        <p className="lead">
          Our Service unlimited solutions to all your business needs. in the
          installation package we prepare search engine optimization, social
          media support, we provide corporate identity and graphic design
          services.
        </p>
      </div>
      {/* end title */}
      <div className="owl-services owl-carousel owl-theme">
        <div className="service-widget">
          <div className="post-media wow fadeIn">
            <a
              href="uploads/service_01.jpg"
              data-rel="prettyPhoto[gal]"
              className="hoverbutton global-radius"
            >
              <i className="flaticon-unlink" />
            </a>
            <img
              src="uploads/service_01.jpg"
              alt=""
              className="img-responsive img-rounded"
            />
          </div>
          <div className="service-dit">
            <h3>Smart Swatch Editions</h3>
            <p>
              Aliquam sagittis ligula et sem lacinia, ut facilisis enim
              sollicitudin. Proin nisi est, convallis nec purus vitae, iaculis
              posuere sapien. Cum sociis natoque.
            </p>
          </div>
        </div>
        {/* end service */}
        <div className="service-widget">
          <div className="post-media wow fadeIn">
            <a
              href="uploads/service_02.jpg"
              data-rel="prettyPhoto[gal]"
              className="hoverbutton global-radius"
            >
              <i className="flaticon-unlink" />
            </a>
            <img
              src="uploads/service_02.jpg"
              alt=""
              className="img-responsive img-rounded"
            />
          </div>
          <div className="service-dit">
            <h3>Web UI Kit Design</h3>
            <p>
              Duis at tellus at dui tincidunt scelerisque nec sed felis.
              Suspendisse id dolor sed leo rutrum euismod. Nullam vestibulum
              fermentum erat. It nam auctor.{" "}
            </p>
          </div>
        </div>
        {/* end service */}
        <div className="service-widget">
          <div className="post-media wow fadeIn">
            <a
              href="uploads/service_03.jpg"
              data-rel="prettyPhoto[gal]"
              className="hoverbutton global-radius"
            >
              <i className="flaticon-unlink" />
            </a>
            <img
              src="uploads/service_03.jpg"
              alt=""
              className="img-responsive img-rounded"
            />
          </div>
          <div className="service-dit">
            <h3>Mobile Optimization</h3>
            <p>
              Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit
              amet lacus vitae massa sodales aliquam at eget quam. Integer
              ultricies et magna quis accumsan.
            </p>
          </div>
        </div>
        {/* end service */}
        <div className="service-widget">
          <div className="post-media wow fadeIn">
            <a
              href="uploads/service_04.jpg"
              data-rel="prettyPhoto[gal]"
              className="hoverbutton global-radius"
            >
              <i className="flaticon-unlink" />
            </a>
            <img
              src="uploads/service_04.jpg"
              alt=""
              className="img-responsive img-rounded"
            />
          </div>
          <div className="service-dit">
            <h3>Digital Design for Mac</h3>
            <p>
              Praesent in neque congue sapien lobortis faucibus id eget erat.{" "}
              <br />
              Pellentesque maximus rutrum felis. Interdum et malesuada fames ac
              ante ipsum primis in faucibus.
            </p>
          </div>
        </div>
        {/* end service */}
      </div>
      {/* end row */}
      <hr className="hr1" />
      <div className="text-center">
        <a
          data-scroll=""
          href="#portfolio"
          className="btn btn-light btn-radius btn-brd"
        >
          View Our Portfolio
        </a>
      </div>
    </div>
    {/* end container */}
  </div>
  {/* end section */}
  <div
    id="testimonials"
    className="parallax section db parallax-off"
    style={{ backgroundImage: 'url("uploads/parallax_03.jpg")' }}
  >
    <div className="container">
      <div className="section-title text-center">
        <h3>Testimonials</h3>
        <p className="lead">
          We thanks for all our awesome testimonials! There are hundreds of our
          happy customers! <br />
          Let's see what others say about GoodWEB Solutions website template!
        </p>
      </div>
      {/* end title */}
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="testi-carousel owl-carousel owl-theme">
            <div className="testimonial clearfix">
              <div className="desc">
                <h3>
                  <i className="fa fa-quote-left" /> Wonderful Support!
                </h3>
                <p className="lead">
                  They have got my project on time with the competition with a
                  sed highly skilled, and experienced &amp; professional team.
                </p>
              </div>
              <div className="testi-meta">
                <img
                  src="uploads/testi_01.png"
                  alt=""
                  className="img-responsive alignleft"
                />
                <h4>
                  James Fernando <small>- Manager of Racer</small>
                </h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
            <div className="testimonial clearfix">
              <div className="desc">
                <h3>
                  <i className="fa fa-quote-left" /> Awesome Services!
                </h3>
                <p className="lead">
                  Explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you
                  completed.
                </p>
              </div>
              <div className="testi-meta">
                <img
                  src="uploads/testi_02.png"
                  alt=""
                  className="img-responsive alignleft"
                />
                <h4>
                  Jacques Philips <small>- Designer</small>
                </h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
            <div className="testimonial clearfix">
              <div className="desc">
                <h3>
                  <i className="fa fa-quote-left" /> Great &amp; Talented Team!
                </h3>
                <p className="lead">
                  The master-builder of human happines no one rejects, dislikes
                  avoids pleasure itself, because it is very pursue pleasure.{" "}
                </p>
              </div>
              <div className="testi-meta">
                <img
                  src="uploads/testi_03.png"
                  alt=""
                  className="img-responsive alignleft"
                />
                <h4>
                  Venanda Mercy <small>- Newyork City</small>
                </h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
            <div className="testimonial clearfix">
              <div className="desc">
                <h3>
                  <i className="fa fa-quote-left" /> Wonderful Support!
                </h3>
                <p className="lead">
                  They have got my project on time with the competition with a
                  sed highly skilled, and experienced &amp; professional team.
                </p>
              </div>
              <div className="testi-meta">
                <img
                  src="uploads/testi_01.png"
                  alt=""
                  className="img-responsive alignleft"
                />
                <h4>
                  James Fernando <small>- Manager of Racer</small>
                </h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
            <div className="testimonial clearfix">
              <div className="desc">
                <h3>
                  <i className="fa fa-quote-left" /> Awesome Services!
                </h3>
                <p className="lead">
                  Explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you
                  completed.
                </p>
              </div>
              <div className="testi-meta">
                <img
                  src="uploads/testi_02.png"
                  alt=""
                  className="img-responsive alignleft"
                />
                <h4>
                  Jacques Philips <small>- Designer</small>
                </h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
            <div className="testimonial clearfix">
              <div className="desc">
                <h3>
                  <i className="fa fa-quote-left" /> Great &amp; Talented Team!
                </h3>
                <p className="lead">
                  The master-builder of human happines no one rejects, dislikes
                  avoids pleasure itself, because it is very pursue pleasure.{" "}
                </p>
              </div>
              <div className="testi-meta">
                <img
                  src="uploads/testi_03.png"
                  alt=""
                  className="img-responsive alignleft"
                />
                <h4>
                  Venanda Mercy <small>- Newyork City</small>
                </h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
          </div>
          {/* end carousel */}
        </div>
        {/* end col */}
      </div>
      {/* end row */}
      <hr className="hr1" />
      <div className="row logos">
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#">
            <img src="uploads/logo_01.png" alt="" className="img-repsonsive" />
          </a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#">
            <img src="uploads/logo_02.png" alt="" className="img-repsonsive" />
          </a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#">
            <img src="uploads/logo_03.png" alt="" className="img-repsonsive" />
          </a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#">
            <img src="uploads/logo_04.png" alt="" className="img-repsonsive" />
          </a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#">
            <img src="uploads/logo_05.png" alt="" className="img-repsonsive" />
          </a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#">
            <img src="uploads/logo_06.png" alt="" className="img-repsonsive" />
          </a>
        </div>
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </div>
  {/* end section */}
</>

  )
}
