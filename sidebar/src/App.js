import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <main>
      <nav>
        <div className="header">
          <ul className="nav-list horizontal-one">
            <li>
              <a href="">Our Services</a>
            </li>
            <li>
              <a href="">Wedding Packages</a>
            </li>
            <li>
              <a href="">Villa Weddings</a>
            </li>
          </ul>
          <div className="logo">
            <h1>BALI WEDDING</h1>
            <h3>PLANNER</h3>
            <div className="icons">
              {!showSidebar && (
                <FaBars
                  className="icon bars"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                ></FaBars>
              )}

              {showSidebar && (
                <AiOutlinePlus
                  className="icon cancel"
                  onClick={() => setShowSidebar(false)}
                ></AiOutlinePlus>
              )}
              <div className="social-media">
                <a href="">
                  <AiOutlineWhatsApp className="icon"></AiOutlineWhatsApp>
                </a>
                <a href="">
                  <AiOutlineMail className="icon"></AiOutlineMail>
                </a>
                <a href="">
                  <AiFillFacebook className="icon"></AiFillFacebook>
                </a>
                <a href="">
                  <AiOutlineInstagram className="icon"></AiOutlineInstagram>
                </a>
                <a href="">
                  <AiFillYoutube className="icon"></AiFillYoutube>
                </a>
              </div>
            </div>
          </div>
          <ul className="nav-list horizontal-two">
            <li>
              <a href="">Vendors</a>
            </li>
            <li>
              <a href="">Enquiry Form</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
        </div>

        <div className={`${showSidebar ? "sidebar show-sidebar" : "sidebar"}`}>
          <ul>
            <li>
              <p></p>
              <AiOutlinePlus
                className="icon cancel"
                onClick={() => setShowSidebar(false)}
              ></AiOutlinePlus>
            </li>
            <li>
              <a href="">Our Services</a>
            </li>
            <li>
              <a href="">Wedding Packages</a>
            </li>
            <li>
              <a href="">Villa Weddings</a>
            </li>
            <li>
              <a href="">Vendors</a>
            </li>
            <li>
              <a href="">Enquiry Form</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main-pic"></div>
    </main>
  );
}

export default App;
