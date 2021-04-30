import React, { useState, useEffect } from "react";
import "../styles.css";
import logo from "../assets/img/nav-logo.svg";
import { Link } from "react-router-dom";
export default function Menu() {
  const [isOpen, setOpen] = useState(true);
  const [subMenuOpen, setsubMEnuOpen] = useState(null);
  const [menuData, setMenuData] = useState();
  useEffect(() => {
    fetch("https://staging.project-progress.net/projects/equantiis/wp-json/industry-expertise/lp")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMenuData(data.header);
      });
  }, []);
  const OpenMenu = () => {
    setOpen(!isOpen);
    isOpen == false ? setsubMEnuOpen(null) : null;
  };
  const CloseMenu = () => {
    setOpen(!isOpen);
  };
  const submenuToggle = (i) => {
    setsubMEnuOpen(i);
  };

  return (
    <>
      <header id='masthead' className='site-header'>
        <div className='container'>
          <div className='row'>
            <div className='logo-blk col-md-6'>
              <figure>
                <img src={logo} alt='logo' />
              </figure>
            </div>
            <div className='fixed-menu-blk'>
              <div className='ask-btn'>
                <a href='#'>Ask us anything</a>
              </div>
              <div className={`hamburger ${isOpen ? "" : "is-active"}`} onClick={() => OpenMenu()}>
                <div className='hamburger-box'>
                  <div className='hamburger-inner'></div>
                </div>
              </div>
            </div>
            <div className={`site-navigation ${isOpen ? "" : "menu-opened"}`}>
              <div className='container'>
                <div className='nav-logo'>
                  <figure>
                    <img src={logo} />
                  </figure>
                </div>
                <div className='inner-navigation'>
                  <div className='menu-main-menu-container'>
                    <ul className='nav-menu'>
                      {menuData ? (
                        menuData.menu.map((menuItem, index) =>
                          menuItem.children.length == 0 ? (
                            <li className='menu-item' key={index}>
                              <a href={menuItem.url}>{menuItem.title}</a>
                            </li>
                          ) : (
                            <li
                              className={`menu-item menu-item-has-children ${
                                subMenuOpen === "firstSubMenu" ? "submenuOpened" : ""
                              }`}
                              key={index}>
                              <a href={menuItem.url}>{menuItem.title}</a>

                              <span className='submenuToggle' onClick={() => submenuToggle("firstSubMenu")}></span>
                              <ul className='sub-menu'>
                                {menuItem.children.map((submenuItem, index) => {
                                  if (!index == 0) {
                                    return (
                                      <li className='menu-item' key={index} onClick={() => CloseMenu()}>
                                        <Link to={`#${submenuItem.url.split("#")[1]}`}>{submenuItem.title}</Link>
                                      </li>
                                    );
                                  } else {
                                    return <li dangerouslySetInnerHTML={{ __html: submenuItem.title }}></li>;
                                  }
                                })}
                              </ul>
                            </li>
                          )
                        )
                      ) : (
                        <h2>Loading</h2>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
