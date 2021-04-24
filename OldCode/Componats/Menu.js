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
      <header id='masthead' className='site-header'>
        <div className='container'>
          <div className='row'>
            <div className='logo-blk col-md-6'>
              <figure>
                <img src='assets/images/logo.svg' alt='logo' />
              </figure>
            </div>
            <div className='fixed-menu-blk'>
              <div className='ask-btn'>
                <a href='#'>Ask us anything</a>
              </div>
              <div className='hamburger'>
                <div className='hamburger-box'>
                  <span className='menu-line line-1'></span>
                  <span className='menu-line line-2'></span>
                  <span className='menu-line line-3'></span>
                </div>
              </div>
            </div>
            <div className='site-navigation'>
              <div className='container'>
                <div className='nav-logo'>
                  <figure>
                    <img src='assets/images/nav-logo.svg' />
                  </figure>
                </div>
                <div className='inner-navigation'>
                  <div className='menu-main-menu-container'>
                    <ul className='nav-menu'>
                      <li className='menu-item'>
                        <a href='#'>Challenges we solve</a>
                      </li>

                      <li className='menu-item menu-item-has-children'>
                        <a href='#'>Industry expertise</a>
                        <ul className='sub-menu'>
                          <li className='menu-item'>
                            <p>
                              We understand your role is difficult. Finding the appropriate answers and translating
                              those findings into useful actions solve your problems or challenges.
                            </p>
                          </li>
                          <li className='menu-item'>
                            <a href='#'>Your Business</a>
                          </li>

                          <li className='menu-item'>
                            <a href='#'>Higher Education</a>
                          </li>

                          <li className='menu-item'>
                            <a href='#'>Not for Profit</a>
                          </li>

                          <li className='menu-item'>
                            <a href='#'>Memberships</a>
                          </li>
                        </ul>
                      </li>

                      <li className='menu-item menu-item-has-children'>
                        <a href='#'>Why us?</a>
                        <ul className='sub-menu'>
                          <li className='menu-item'>
                            <p>
                              We understand your role is difficult. Finding the appropriate answers and translating
                              those findings into useful actions solve your problems or challenges.
                            </p>
                          </li>
                          <li className='menu-item'>
                            <a href='#'>Your Business</a>
                          </li>

                          <li className='menu-item'>
                            <a href='#'>Higher Education</a>
                          </li>

                          <li className='menu-item'>
                            <a href='#'>Not for Profit</a>
                          </li>

                          <li className='menu-item'>
                            <a href='#'>Memberships</a>
                          </li>
                        </ul>
                      </li>

                      <li className='menu-item'>
                        <a href='#'>Success stories</a>
                      </li>

                      <li className='menu-item'>
                        <a href='#'>Thinklab</a>
                      </li>

                      <li className='menu-item'>
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
