import React from "react";
import GreenBannerCircle from "../assets/img/GreenBannerCircle.svg";
import bannerimg from "../assets/img/banner-img1.png";
import { ReactComponent as Pattern1 } from "../assets/img/pattern1.svg";
export default function Slide() {
  return (
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
                  <h2>
                    Helping Higher Education <span>to improve the student experience</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className='banner-img col-md-5'>
              <figure>
                <img src={bannerimg} alt='Banner Image' />
              </figure>
            </div>
          </div>
          <div className='explore-btn arrow-btn'>
            <a href='#'>
              <span className='arrow'>
                <i className='far fa-arrow-down'></i>
              </span>
              Discover how we unlock experience potential in Higher Education
            </a>
          </div>
          <div className='pattern-img desktop'>
            <figure>
              <Pattern1 />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
