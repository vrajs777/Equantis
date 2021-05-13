import React from "react";
import { ReactComponent as Pattern4 } from "../assets/img/pattern4.svg";
export default function Ask({ item }) {
  return (
    <div className='challenges-section'>
      <div className='container'>
        <div className='challenge-blocks'>
          <div className='row'>
            {item.challanges &&
              item.challanges.map((item, index) => (
                <div className='single-challenge-blog col-md-6' key={index + "challanges"}>
                  <div className='inner-challenge-blog'>
                    <div
                      className='blog-img'
                      style={item.image_bg_color ? { background: item.image_bg_color } : { background: "#f0f1f3" }}>
                      {item.image ? (
                        <figure>
                          <img src={item.image} alt='' />
                        </figure>
                      ) : null}
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
                </div>
              ))}
          </div>
        </div>
        <div className='know-more-section'>
          <div className='inner-blk text-center'>
            {item.button_text ? <h5> {item.button_text}</h5> : null}
            <div className='btn-blk yellow-bg'>
              {item.button.title && item.button.url ? (
                <a href={item.button.url} className='cta-btn'>
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
