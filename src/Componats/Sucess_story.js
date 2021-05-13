import React from "react";

import { ReactComponent as Pattern2 } from "../assets/img/pattern2.svg";
export default function Sucess_story({ item }) {
  return (
    <div className='circle-story-section'>
      <div className='circle-blk-section'>
        {item[0] ? (
          <div className='inner-circle-blk'>
            <div className='container'>
              <div className='inner-blk'>
                <div className='row'>
                  <div className='content-blk col-md-6'>
                    <div className='inner-content-blk'>
                      {item[0] ? (
                        <span className='education-row'>{item[0].cateogry}</span>
                      ) : (
                        <span className='education-row'>Higher Education Success Story</span>
                      )}

                      {item[0].title ? <h3>{item[0].title}</h3> : null}
                      {item[0].description ? <p>{item[0].description}</p> : null}
                      <div className='arrow-btn'>
                        {item[0].link ? (
                          <a href={item[0].link}>
                            Discover more
                            <span className='arrow'>
                              <i className='far fa-arrow-right'></i>
                            </span>
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className='img-blk col-md-6'>
                    <div className='inner-img-blk'>
                      <div className='main-img'>
                        {item[0].featured_image ? (
                          <figure>
                            <img src={item[0].featured_image.url} alt='Story Image' />
                          </figure>
                        ) : null}
                      </div>
                      <div className='logo-img'>
                        {item[0].image ? (
                          <figure>
                            <img src={item[0].image} alt='manchester' />
                          </figure>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className='story-blk'>
        <div className='container'>
          <div className='inner-story-blk'>
            <div className='row'>
              {item[1] ? (
                <div className='single-story col-md-6'>
                  <div className='inner-single-story'>
                    <div className='content-blk'>
                      <div className='inner-content-blk'>
                        {item[1] ? (
                          <span className='education-row'>{item[1].cateogry}</span>
                        ) : (
                          <span className='education-row'>Higher Education Success Story</span>
                        )}
                        {item[1].title ? <h4>{item[1].title}</h4> : null}
                        <div className='arrow-btn'>
                          {item[1].link ? (
                            <a href={item[1].link}>
                              Discover more
                              <span className='arrow'>
                                <i className='far fa-arrow-right'></i>
                              </span>
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className='logo-blk'>
                      {item[1].image ? (
                        <figure>
                          <img src={item[1].image} alt='manchester' />
                        </figure>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}
              {item[2] ? (
                <div className='single-story col-md-6'>
                  <div className='inner-single-story'>
                    <div className='content-blk'>
                      <div className='inner-content-blk'>
                        {item[2] ? (
                          <span className='education-row'>{item[2].cateogry}</span>
                        ) : (
                          <span className='education-row'>Higher Education Success Story</span>
                        )}
                        {item[2].title ? <h4>{item[2].title}</h4> : null}
                        {item[2].link ? (
                          <div className='arrow-btn'>
                            <a href={item[2].link ? item[2].link : "#"}>
                              Discover more
                              <span className='arrow'>
                                <i className='far fa-arrow-right'></i>
                              </span>
                            </a>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className='logo-blk'>
                      {item[2].image ? (
                        <figure>
                          <img src={item[2].image} alt='manchester' />
                        </figure>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className='pattern-img desktop'>
        <figure>
          <Pattern2 />
        </figure>
      </div>
    </div>
  );
}
