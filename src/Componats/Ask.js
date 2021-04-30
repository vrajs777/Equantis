import React from "react";
import { ReactComponent as Pattern4 } from "../assets/img/pattern4.svg";
export default function Ask({ item }) {
  return (
    <div className='challenges-section'>
      <div className='container'>
        <div className='challenge-blocks'>
          <div className='row'>
            {item.challanges.map((item) => (
              <div className='single-challenge-blog col-md-6'>
                <div className='blog-img' style={{ background: "#F0F1F3" }}>
                  <figure>{item.image ? <img src={item.image} alt='' /> : null}</figure>
                </div>
                <div className='blog-content'>
                  <div className='inner-blog-content'>
                    <span className='challenge-tag'>{item.small_heading}</span>
                    {item.heading ? <h3>{item.heading}</h3> : null}
                    <div className='arrow-btn'>
                      {item.link.url ? (
                        <a href={item.link.url}>
                          {item.link.title}
                          <span className='arrow'>
                            <i className='far fa-arrow-right'></i>
                          </span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='know-more-section'>
          <div className='inner-blk text-center'>
            {item.button_text ? <h5> {item.button_text}</h5> : null}
            <div className='btn-blk yellow-bg'>
              {item.button.title ? (
                <a href='#' className='cta-btn'>
                  {item.button.title}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className='pattern-img desktop'>
        <figure>
          <Pattern4 />
        </figure>
      </div>
    </div>
  );
}
