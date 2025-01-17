import React from 'react'

export default function AboutUs() {
  return (
    <>
  <div className="banner-area banner-bg-1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="banner">
            <h2>About Us</h2>
            <ul className="page-title-link">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="about" className="section wb">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="message-box">
            <h4>About Us</h4>
            <h2>Welcome to GoodWEB Solutions</h2>
            <p className="lead">
              Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
              vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus
              dignissim.
            </p>
            <p>
              {" "}
              Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis
              nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus
              molestie. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat
              sit amet libero bibendum aliquam. Donec ac egestas libero, eu
              bibendum risus. Phasellus et congue justo.{" "}
            </p>
            <a
              href="#services"
              className="btn btn-light btn-radius btn-brd grd1"
            >
              Learn More
            </a>
          </div>
          {/* end messagebox */}
        </div>
        {/* end col */}
        <div className="col-md-6">
          <div className="post-media wow fadeIn">
            <img
              src="uploads/about_01.jpg"
              alt=""
              className="img-responsive img-rounded"
            />
            <a
              href="http://www.youtube.com/watch?v=nrJtHemSPW4"
              data-rel="prettyPhoto[gal]"
              className="playbutton"
            >
              <i className="flaticon-play-button" />
            </a>
          </div>
          {/* end media */}
        </div>
        {/* end col */}
      </div>
      {/* end row */}
      <hr className="hr1" />
      <div className="row">
        <div className="col-md-6">
          <div className="post-media wow fadeIn">
            <img
              src="uploads/about_02.jpg"
              alt=""
              className="img-responsive img-rounded"
            />
          </div>
          {/* end media */}
        </div>
        {/* end col */}
        <div className="col-md-6">
          <div className="message-box">
            <h4>Who We are</h4>
            <h2>We Are GoodWEB Solutions</h2>
            <p className="lead">
              Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
              vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus
              dignissim.
            </p>
            <p>
              {" "}
              Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis
              nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus
              molestie. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat
              sit amet libero bibendum aliquam. Donec ac egestas libero, eu
              bibendum risus. Phasellus et congue justo.{" "}
            </p>
            <a
              href="#services"
              className="btn btn-light btn-radius btn-brd grd1"
            >
              Learn More
            </a>
          </div>
          {/* end messagebox */}
        </div>
        {/* end col */}
      </div>
      {/* end row */}
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
