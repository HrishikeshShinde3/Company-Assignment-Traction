import React from 'react';
import './Card.css'; // Import your CSS file for styling

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          <div className="cover">
            <img src="https://cdn.pixabay.com/photo/2016/11/29/01/44/hands-1866619_1280.jpg" alt="Cover"  />
          </div>
          <div className="user">
            <img className="img-circle" src="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_1280.jpg" alt="User" height={150} width={150}/>
          </div>
          <div className="content">
            <div className="main">
              <h3 className="name">Sophie Devine</h3>
              <p className="profession">Co Founder</p>

              <p className="text-center">
              “Learn as if you will live forever, live like you will die tomorrow.”
              </p>
            </div>
            <div className="footer">
              <div className="rating">
                <i className="fa fa-mail-forward"></i> Auto Rotation
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end front panel --> */}
        <div className="back">
          <div className="header">
            <h5 className="motto">"To be or not to be, this is my awesome motto!"</h5>
          </div>
          <div className="content">
            <div className="main">
              <h4 className="text-center">Job Description</h4>
              <p className="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>

              <div className="stats-container">
                <div className="stats">
                  <h4>235</h4>
                  <p>Followers</p>
                </div>
                <div className="stats">
                  <h4>114</h4>
                  <p>Following</p>
                </div>
                <div className="stats">
                  <h4>35</h4>
                  <p>Projects</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="social-links text-center">
              <a href="" className="facebook"><i className="fa fa-facebook fa-fw"></i></a>
              <a href="" className="google"><i className="fa fa-google-plus fa-fw"></i></a>
              <a href="" className="twitter"><i className="fa fa-twitter fa-fw"></i></a>
            </div>
          </div>
        </div>
        {/* <!-- end back panel --> */}
      </div>
      {/* <!-- end card --> */}
    </div>
    /* <!-- end card-container --> */
  );
};

export default Card;
