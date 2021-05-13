import React, { useState, useEffect, useRef } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import MobSubmenu from "./MobSubmenu";
import ApiLink from "./ApiLink";
export default function Menu() {
  const HeighRef = useRef(null);
  const [isOpen, setOpen] = useState(true);
  const [isToggleActive, setToggleActive] = useState(true);
  const [subMenuOpen, setsubMEnuOpen] = useState(null);
  const [menuData, setMenuData] = useState();
  const [isMobile, setMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    fetch(ApiLink)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMenuData(data.header);
      });
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width < 767) {
      setToggleActive(false);
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]);
  const OpenMenu = () => {
    setOpen(!isOpen);
    isOpen
      ? document.getElementsByTagName("body")[0].classList.add("menu-is-opened")
      : document.getElementsByTagName("body")[0].classList.remove("menu-is-opened");
    if (isOpen == false) {
      setsubMEnuOpen(null);
    }
  };

  const CloseMenu = () => {
    setOpen(!isOpen);
    setsubMEnuOpen(null);
    document.getElementsByTagName("body")[0].classList.remove("menu-is-opened");
  };
  const submenuToggle = (i) => {
    width > 767 ? ToggleSubmenu(i) : mobileToggle(i);
  };
  const ToggleSubmenu = (i) => {
    i === subMenuOpen ? setsubMEnuOpen(null) : setsubMEnuOpen(i);
  };
  const mobileToggle = (i) => {
    // console.log(HeighRef.current.offsetHeight, "offset");
    setToggleActive(!isToggleActive);
    isToggleActive && document.getElementById("menu-item").classList.contains("submenuOpened")
      ? setsubMEnuOpen(null)
      : setsubMEnuOpen(i);
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
                      <img src={menuData.nav_logo} />
                    </figure>
                  ) : null}
                </div>
                <div className='inner-navigation'>
                  <div className='menu-main-menu-container'>
                    <ul className='nav-menu'>
                      {menuData ? (
                        !isMobile ? (
                          menuData.menu.map((menuItem, index) =>
                            menuItem.children.length == 0 ? (
                              <li className='menu-item' key={index + "menu"}>
                                <a href={menuItem.url}>{menuItem.title}</a>
                              </li>
                            ) : (
                              <li
                                className={`menu-item menu-item-has-children ${
                                  subMenuOpen === index ? "submenuOpened" : ""
                                }`}
                                key={index + "menu"}
                                id='menu-item'>
                                <a href={menuItem.url}>{menuItem.title}</a>

                                <span className='submenuToggle' onClick={() => submenuToggle(index)}></span>

                                <ul className='sub-menu' ref={HeighRef}>
                                  {menuItem.children.map((submenuItem, index) => {
                                    if (!index == 0) {
                                      return (
                                        <li
                                          className='menu-item'
                                          key={index + "submenuItem"}
                                          onClick={() => CloseMenu()}
                                          key={index + "menu"}>
                                          {submenuItem.title && submenuItem.url.split("#")[1] ? (
                                            <Link to={`#${submenuItem.url.split("#")[1]}`}>{submenuItem.title}</Link>
                                          ) : submenuItem.title ? (
                                            <a href={submenuItem.url}>{submenuItem.title}</a>
                                          ) : (
                                            <a></a>
                                          )}
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
                          <MobSubmenu menuData={menuData} CloseMenu={OpenMenu} />
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
