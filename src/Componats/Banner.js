import React from "react";
import "../styles.css";
import GreenBannerCircle from "../assets/img/GreenBannerCircle.svg";
import { ReactComponent as Pattern1 } from "../assets/img/pattern1.svg";

export default function Banner({ item, myRef }) {
  const executeScroll = () => window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop });
  return (
    <div style={{ background: `${item.bg_color}` }}>
      <div className='banner-section'>
        <div className='TwoCircleImg'>
          <figure>
            <img src={GreenBannerCircle} alt='' />
          </figure>
        </div>
        <div className='container'>
          <div className='banner-content'>
            <div className='row'>
              <div className='banner-content col-md-7'>
                <div className='inner-content'>
                  <div className='banner-title'>
                    {item.heading && item.white_heading ? (
                      <h2>
                        <span className='trans-bg'>{item.heading}</span>
                        <span className='bg-color'>{item.white_heading}</span>
                      </h2>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className='banner-img col-md-5'>
                <figure>{item.image ? <img src={item.image} alt='Banner Image' /> : null}</figure>
              </div>
            </div>
            <div className='explore-btn arrow-btn'>
              {item.button.title ? (
                <a href='javascript:void(0)' onClick={executeScroll}>
                  <span className='arrow'>
                    <i className='far fa-arrow-down'></i>
                  </span>
                  {item.button.title}
                </a>
              ) : null}
            </div>
            <div className='pattern-img desktop'>
              <figure>
                <Pattern1 />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}