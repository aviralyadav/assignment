import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css"
import hiringImg from "../../assets/images/hiring.png";
import imageNew from "../../assets/images/new.png"

const Header = () => {
  return (
    <>
      <div className="tob-header-area" style={{ marginTop: 0 }}>
        <div className="container-fluid">
          <div className="cont-flex">
            <div className="col-lg-12 col-md-12" style={{ width: "100%" }}>
              <div className="heder-right-content">
                <div className="cont-flex">
                  <div
                    className="cont-flex"
                  >
                    <div>
                      <img src={hiringImg} style={{ width: 120 }} />
                    </div>
                    <marquee>
                      <p className="flex">
                        <img
                          src={imageNew}
                          style={{ width: 45, marginLeft: 50 }}
                        />
                        <a href="job?id=1" style={{ color: "#fff" }}>
                          National Institute Of Ayurveda -Panchkula(HARYANA) |
                        </a>
                      </p>
                    </marquee>
                  </div>
                  <div className=" col-lg-2 col-md-5">
                    <div className="social-content">
                      <ul>
                        <li>
                          <a
                            style={{ background: "#f79220" }}
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <i className="ri-facebook-line"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ background: "#f79220" }}
                            href="https://www.twitter.com/"
                            target="_blank"
                          >
                            <i className="ri-twitter-line"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ background: "#f79220" }}
                            href="https://instagram.com/?lang=en"
                            target="_blank"
                          >
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ background: "#f79220" }}
                            href="https://linkedin.com/?lang=en"
                            target="_blank"
                          >
                            <i className="ri-linkedin-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
