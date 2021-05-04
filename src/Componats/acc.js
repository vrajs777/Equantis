import React, { useEffect, useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { Link } from "react-router-dom";

export default function SimpleAccordion({ menuData }) {
  return (
    <div>
      <ul className='nav-menu'>
        {menuData ? (
          menuData.menu.map((menuItem, index) =>
            menuItem.children.length == 0 ? (
              <li className='menu-item' key={index + "menu"}>
                <a href={menuItem.url}>{menuItem.title}</a>
              </li>
            ) : (
              <Accordion>
                <AccordionSummary
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  className='menu-item menu-item-has-children'>
                  <FormControlLabel
                    aria-label='Acknowledge'
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={<a href={menuItem.url}>{menuItem.title}</a>}
                  />
                  <span className='submenuToggle'></span>
                </AccordionSummary>
                <AccordionDetails>
                  {menuItem.children.map((submenuItem, index) => {
                    if (!index == 0) {
                      return (
                        <li className='menu-item' key={index + "submenuItem"} key={index + "menu"}>
                          <Link to={`#${submenuItem.url.split("#")[1]}`}>{submenuItem.title}</Link>
                        </li>
                      );
                    } else {
                      return <li dangerouslySetInnerHTML={{ __html: submenuItem.title }} key={index + "menu"}></li>;
                    }
                  })}
                </AccordionDetails>
              </Accordion>
            )
          )
        ) : (
          <div></div>
        )}
      </ul>
      {/*  (
                            <li
                              className={`menu-item menu-item-has-children ${
                                subMenuOpen === index ? "submenuOpened" : ""
                              }`}
                              key={index + "menu"}
                              id='menu-item'>
                              <a href={menuItem.url}>{menuItem.title}</a>

                              <span className='submenuToggle' onClick={() => submenuToggle(index)}></span>

                              <ul
                                className='sub-menu'
                                ref={HeighRef}
                                style={
                                  isMobile
                                    ? isToggleActive
                                      ? { height: isMobile ? MobHeight : "auto", visibility: "visible" }
                                      : { height: "0", visibility: "hidden" }
                                    : { height: "auto" }
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
                          ) : (
                            <Acc />
                          ) */}
    </div>
  );
}
