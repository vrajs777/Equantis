import React from "react";
import NiicoBg from "../assets/img/Niico-bg.svg";
import { ReactComponent as Pattern3 } from "../assets/img/pattern3.svg";
export default function ctaButton({ item }) {
  return (
    <div className='premium-product-section'>
      <div className='inner-premium-product' style={{ background: "#36FF9C" }}>
        <div className='container'>
          <div className='inner-content'>
            <div className='row'>
              <div className='content-blk col-md-6'>
                <div className='inner-content-blk'>
                  {item.small_heading ? <span>{item.small_heading}</span> : null}
                  {item.heading ? <h2>{item.heading}</h2> : null}
                  <div className='btn-blk'>
                    <a href={item.button.url} className='cta-btn'>
                      {item.button.title ? item.button.title : null}
                    </a>
                  </div>
                </div>
              </div>
              <div className='img-blk col-md-6'>
                <div className='inner-img-blk' style={{ background: `url(${NiicoBg})` }}>
                  <figure>{item.image ? <img src={item.image} alt='Niico' /> : null}</figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pattern-img desktop'>
        <figure>
          <Pattern3 />
        </figure>
      </div>
    </div>
  );
}
