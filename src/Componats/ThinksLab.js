import React from "react";
import exploredottimg from "../assets/img/explore-dott-img.svg";
import { ReactComponent as Pattern4 } from "../assets/img/pattern4.svg";
export default function ThinksLab({ item }) {
  return (
    <div className='thinklab-blog'>
      <div className='container'>
        <div className='section-title'>
          <div className='dot-img desktop'>
            <figure>
              <img src={exploredottimg} />
            </figure>
          </div>
          <h2>Our latest Thinklab Higher Education insight…</h2>
        </div>
        {item.thinklabs.map((thinklab) => (
          <div className='blog-blk'>
            <div className='single-blog'>
              <div className='inner-single-blog'>
                <div className='blog-img'>
                  <div className='inner-blog-img'>
                    <figure>{thinklab.image ? <img src={thinklab.image} alt='Blog Image' /> : null}</figure>
                    <span className='blog-cat'>Thought Piece</span>
                  </div>
                </div>

                <div className='blog-content'>
                  <div className='inner-blog-content'>
                    <h4>{thinklab.title}</h4>
                    {thinklab.description ? <p>{thinklab.description}</p> : null}

                    {thinklab.author_detail ? (
                      <div dangerouslySetInnerHTML={{ __html: thinklab.author_detail }}></div>
                    ) : null}

                    <div className='arrow-btn'>
                      <a href={thinklab.link}>
                        Read more
                        <span className='arrow'>
                          <i className='far fa-arrow-right'></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className='more-thinkable btn-blk yellow-bg text-center'>
          <a href={item.button.url} className='cta-btn '>
            {item.button.title ? item.button.title : null}
          </a>
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
