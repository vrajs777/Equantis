import React, { useState, useEffect } from "react";

export default function FixedNav({ changeSlideOnCLick, staticData, ActiveDot }) {
  const [isOpen, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if (window.innerHeight < position) {
      if (!document.getElementsByTagName("body")[0].classList.contains("ShowFixedMenu")) {
        document.getElementsByTagName("body")[0].classList.add("ShowFixedMenu");
      }
    } else {
      if (document.getElementsByTagName("body")[0].classList.contains("ShowFixedMenu")) {
        document.getElementsByTagName("body")[0].classList.remove("ShowFixedMenu");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={isOpen ? `sticky-bar active` : `sticky-bar `} onClick={() => setOpen(!isOpen)}>
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
