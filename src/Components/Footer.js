import React from 'react';
import './Footer.css';

function Main() {
  const bubbles = [];
  for (let i = 0; i < 128; i++) {
    const size = `2rem + ${Math.random() * 4}rem`;
    const distance = `6rem + ${Math.random() * 4}rem`;
    const position = `-5% + ${Math.random() * 110}%`;
    const time = `2s + ${Math.random() * 2}s`;
    const delay = `-${2 + Math.random() * 2}s`;

    const bubbleStyle = {
      '--size': size,
      '--distance': distance,
      '--position': position,
      '--time': time,
      '--delay': delay,
    };

    bubbles.push(
      <div className="bubble" key={i} style={bubbleStyle}></div>
    );
  }

  return (
    <main>
      <div className="main-footer">
        <div className="bubbles">{bubbles}</div>
        <div className="main-footer-content">
          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <h6>About</h6>
                  <p className="text-justify">This is a test website made by <p>Hrishikesh Shinde</p>.I am from <p>Sinnar Dist:Nashik</p>. I have completed my bachelors degree from Sir Visvesvaraya Institute of Technology, Nashik. I have completed my degree in first class with distinction. Also apart from that In 8th semester itself I got placed in wipro as project engineer. Here is my Portfolio:<li><a href="https://hrishikesh-shinde-portfolio.netlify.app/">https://hrishikesh-shinde-portfolio.netlify.app/</a></li></p>
                </div>

                <div className="col-xs-6 col-md-3">
                  <h6>Services</h6>
                  <ul className="footer-links">
                    <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                    <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                    <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                    <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                    <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                    <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                  </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                  <h6>Quick Links</h6>
                  <ul className="footer-links">
                    <li><a href="http://scanfcode.com/about/">About Us</a></li>
                    <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                    <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                    <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <hr />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                     <a href="#">Traction</a>.
                  </p>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="social-icons">
                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default Main;
