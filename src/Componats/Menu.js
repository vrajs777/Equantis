import React, { useState } from "react";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import "./menu.css";
export default function Menu() {
  const [isOpen, setOpen] = useState(false);
  const OpenMenu = () => {
    console.log("menu", !isOpen);
    setOpen(!isOpen);
  };
  const CloseMenu = () => {
    setOpen(false);
    console.log("menu", isOpen);
  };
  return (
    <div>
      {/* <div className='db'>
          <h2>Menu</h2>
          <AiOutlineMenu onClick={OpenMenu} />
          <div className={`main-menu ${isOpen ? "db" : "dn"}`}>
            <AiFillCloseCircle onClick={CloseMenu} />
          
          </div>
        </div> */}
      <header id='masthead' class='site-header'>
        <div class='container'>
          <div class='row'>
            <div class='logo-blk col-md-6'>
              <figure>
                <img src='assets/images/logo.svg' alt='logo' />
              </figure>
            </div>
            <div class='fixed-menu-blk'>
              <div class='ask-btn'>
                <a href='#'>Ask us anything</a>
              </div>
              <div class='hamburger'>
                <div class='hamburger-box'>
                  <span class='menu-line line-1'></span>
                  <span class='menu-line line-2'></span>
                  <span class='menu-line line-3'></span>
                </div>
              </div>
            </div>
            <div class='site-navigation'>
              <div class='container'>
                <div class='nav-logo'>
                  <figure>
                    <img src='assets/images/nav-logo.svg' />
                  </figure>
                </div>
                <div class='inner-navigation'>
                  <div class='menu-main-menu-container'>
                    <ul class='nav-menu'>
                      <li class='menu-item'>
                        <a href='#'>Challenges we solve</a>
                      </li>

                      <li class='menu-item menu-item-has-children'>
                        <a href='#'>Industry expertise</a>
                        <ul class='sub-menu'>
                          <li class='menu-item'>
                            <p>
                              We understand your role is difficult. Finding the appropriate answers and translating
                              those findings into useful actions solve your problems or challenges.
                            </p>
                          </li>
                          <li class='menu-item'>
                            <a href='#'>Your Business</a>
                          </li>

                          <li class='menu-item'>
                            <a href='#'>Higher Education</a>
                          </li>

                          <li class='menu-item'>
                            <a href='#'>Not for Profit</a>
                          </li>

                          <li class='menu-item'>
                            <a href='#'>Memberships</a>
                          </li>
                        </ul>
                      </li>

                      <li class='menu-item menu-item-has-children'>
                        <a href='#'>Why us?</a>
                        <ul class='sub-menu'>
                          <li class='menu-item'>
                            <p>
                              We understand your role is difficult. Finding the appropriate answers and translating
                              those findings into useful actions solve your problems or challenges.
                            </p>
                          </li>
                          <li class='menu-item'>
                            <a href='#'>Your Business</a>
                          </li>

                          <li class='menu-item'>
                            <a href='#'>Higher Education</a>
                          </li>

                          <li class='menu-item'>
                            <a href='#'>Not for Profit</a>
                          </li>

                          <li class='menu-item'>
                            <a href='#'>Memberships</a>
                          </li>
                        </ul>
                      </li>

                      <li class='menu-item'>
                        <a href='#'>Success stories</a>
                      </li>

                      <li class='menu-item'>
                        <a href='#'>Thinklab</a>
                      </li>

                      <li class='menu-item'>
                        <a href='#'>Events</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
