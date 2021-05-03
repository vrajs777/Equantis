import React, { useState } from "react";

export default function FixedNav({ changeSlideOnCLick, staticData, ActiveDot }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={isOpen ? `sticky-bar active` : `sticky-bar `}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      <div className='inner-stick'>
        <div className='sticky-title'>
          {staticData ? <h5>{staticData.heading}</h5> : null}
          <span className='circle-arrow'>
            <i class='far fa-chevron-down'></i>
          </span>
        </div>
        <div
          className='hide-listing'
          style={isOpen ? { height: "auto", display: "block" } : { height: "0", display: "none" }}>
          <div className='row'>
            {staticData &&
              staticData.buttons.map((btn, i) => (
                <div className='list-btn col-md-6' key={i + "ntn"}>
                  <a
                    href='javascript:void(0);'
                    className={ActiveDot === i ? "cta-btn active" : "cta-btn "}
                    onClick={(e) => changeSlideOnCLick(e, i)}>
                    {btn.cta_buttons.title}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
