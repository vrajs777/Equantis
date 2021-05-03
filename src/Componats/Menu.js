import React, { useState, useEffect, useRef } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
export default function Menu() {
  const HeighRef = useRef(null);
  const [MobHeight, setMobHeight] = useState(true);
  const [isOpen, setOpen] = useState(true);
  const [isMobileActive, setMobileActive] = useState(true);
  const [subMenuOpen, setsubMEnuOpen] = useState(null);
  const [menuData, setMenuData] = useState();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    fetch("https://staging.project-progress.net/projects/equantiis/wp-json/industry-expertise/lp")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMenuData(data.header);
      });
    function handleResize() {
      console.log("resize", document.getElementsByClassName("sub-menu")[0].clientHeight);
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }
    window.addEventListener("resize", handleResize);
    document.getElementsByClassName("sub-menu")[0]
      ? document.getElementsByClassName("sub-menu")[0].clientHeight > 1
        ? setMobHeight(document.getElementsByClassName("sub-menu")[0].clientHeight)
        : null
      : 0;

    return () => window.removeEventListener("resize", handleResize);
  }, [document.getElementsByClassName("sub-menu")[0]]);

  useEffect(() => {
    width < 767 && MobHeight > 50 ? setMobileActive(false) : null;
  }, [MobHeight, width]);
  const OpenMenu = () => {
    setOpen(!isOpen);
    isOpen == false ? setsubMEnuOpen(null) : null;
  };
  const CloseMenu = () => {
    setOpen(!isOpen);
  };
  const submenuToggle = (i) => {
    // console.log(width, isOpen, i);
    width > 767 ? setsubMEnuOpen(i) : mobileToggle();
  };
  const mobileToggle = () => {
    console.log(HeighRef.current.offsetHeight, "offset");
    setMobileActive(!isMobileActive);
    isMobileActive && document.getElementById("menu-item").classList.contains("submenuOpened")
      ? setsubMEnuOpen(null)
      : setsubMEnuOpen("firstSubMenu");
  };

  return (
    <>
      <header id='masthead' className='site-header'>
        <div className='container'>
          <div className='row'>
            <div className='logo-blk col-md-6'>
              {menuData ? (
                <figure>
                  <a href={menuData.logo_url}>
                    <img src={menuData.logo} alt='logo' />
                  </a>
                </figure>
              ) : null}
            </div>
            <div className='fixed-menu-blk'>
              {menuData ? (
                <div className='ask-btn desktop'>
                  <a href={menuData.ask_us.url}>{menuData.ask_us.title}</a>
                </div>
              ) : null}

              <div className={`hamburger ${isOpen ? "" : "is-active"}`} onClick={() => OpenMenu()}>
                <div className='hamburger-box'>
                  <div className='hamburger-inner'></div>
                </div>
              </div>
            </div>
            <div className={`site-navigation ${isOpen ? "" : "menu-opened"}`}>
              <div className='container'>
                <div className='nav-logo'>
                  {menuData ? (
                    <figure>
                      <img src={menuData.nav_logo} />{" "}
                    </figure>
                  ) : null}
                </div>
                <div className='inner-navigation'>
                  <div className='menu-main-menu-container'>
                    <ul className='nav-menu'>
                      {menuData ? (
                        menuData.menu.map((menuItem, index) =>
                          menuItem.children.length == 0 ? (
                            <li className='menu-item' key={index + "menu"}>
                              <a href={menuItem.url}>{menuItem.title}</a>
                            </li>
                          ) : (
                            <li
                              className={`menu-item menu-item-has-children ${
                                subMenuOpen === "firstSubMenu" ? "submenuOpened" : ""
                              }`}
                              key={index + "menu"}
                              id='menu-item'>
                              <a href={menuItem.url}>{menuItem.title}</a>

                              <span className='submenuToggle' onClick={() => submenuToggle("firstSubMenu")}></span>

                              <ul
                                className='sub-menu'
                                ref={HeighRef}
                                style={
                                  isMobileActive
                                    ? { height: MobHeight ? MobHeight : "auto", visibility: "visible" }
                                    : { height: "0", visibility: "hidden" }
                                }>
                                {menuItem.children.map((submenuItem, index) => {
                                  if (!index == 0) {
                                    return (
                                      <li
                                        className='menu-item'
                                        key={index + "submenuItem"}
                                        onClick={() => CloseMenu()}
                                        key={index + "menu"}>
                                        <Link to={`#${submenuItem.url.split("#")[1]}`}>{submenuItem.title}</Link>
                                      </li>
                                    );
                                  } else {
                                    return (
                                      <li
                                        dangerouslySetInnerHTML={{ __html: submenuItem.title }}
                                        key={index + "menu"}></li>
                                    );
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
// style={isMobileActive > 1 ? { height: isMobileActive } : { height: "0" }}
