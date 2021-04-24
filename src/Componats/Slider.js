import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "../assets/css/font-awesome.css";
import "../assets/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import { ReactComponent as Pattern1 } from "../assets/img/pattern1.svg";
import { ReactComponent as Pattern2 } from "../assets/img/pattern2.svg";
import { ReactComponent as Pattern3 } from "../assets/img/pattern3.svg";
import { ReactComponent as Pattern4 } from "../assets/img/pattern4.svg";
import { ReactComponent as Pattern5 } from "../assets/img/pattern5.svg";
import "../styles.css";

import storyimg from "../assets/img/circle-img.png";
import ManchesterLogo from "../assets/img/manchester.svg";
import EastLondon from "../assets/img/east-london.svg";
import NiicoBg from "../assets/img/Niico-bg.svg";
import GetTouchBg from "../assets/img/get-line-img.svg";
import GreenBannerCircle from "../assets/img/GreenBannerCircle.svg";
import exploredottimg from "../assets/img/explore-dott-img.svg";
import { createLogicalOr } from "typescript";
export default function SliderMain(props) {
  const [nav1, setNav1] = useState(null);
  const [index, setIndex] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  const [nav4, setNav4] = useState(null);
  const [nav5, setNav5] = useState(null);
  const [laoding, setLoading] = useState(true);
  const [newdata, setNewData] = useState();
  const [staticData, setstaticData] = useState();
  const [banner, setBanner] = useState([]);
  const [option, setOption] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);
  const slider4 = useRef(null);
  const slider5 = useRef(null);
  useEffect(() => {
    setOption(props.location.hash.split("#")[1]);
    setNav1(slider1.current);
    slider1.current.slickGoTo(0);
    setNav2(slider2.current);
    setNav3(slider3.current);
    setNav4(slider4.current);
    setNav5(slider5.current);
    setIndex(0);

    fetch("https://staging.project-progress.net/projects/equantiis/wp-json/industry-expertise/lp")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(true);
        let newData = data.body.content_dynamic;
        let staticDatas = data.body.content_static;
        //console.log(newData, staticDatas);
        setNewData(newData);
        setBanner([]);
        Object.keys(newData).forEach(function (key, index) {
          //  console.log(data, key);
          if (key == option) {
            var value = newData[key];
            // console.log(value);
            value.map((data) => setBanner((oldFiles) => [...oldFiles, data]));
            setLoading(false);
            return false;
          }
        });
        setstaticData(staticDatas);
      });
  }, [option]);

  const settings = {
    loop: true,
    infinite: false,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 10000,
    beforeChange: function (currentSlide, nextSlide) {
      // console.log("before change", currentSlide, nextSlide);
      setIndex(nextSlide);
    },
    afterChange: function (currentSlide) {
      // console.log("after change", currentSlide);
    },
  };

  return (
    <div>
      {/*= <div style={{ opacity: laoding ? 1 : 0 }}>loading....</div> */}

      <div style={{ opacity: laoding ? 0 : 1 }}>
        <Slider asNavFor={nav2} ref={slider1} {...settings} className='banner'>
          {banner.length === 4 ? (
            banner.map((item, el) =>
              index === el ? (
                <div key={el} style={{ background: `${item.bg_color}` }}>
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
                                  Helping Higher Education
                                  <span>{item.heading}</span>
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className='banner-img col-md-5'>
                            <figure>
                              <img src={item.banner.image} alt='Banner Image' />
                            </figure>
                          </div>
                        </div>
                        <div className='explore-btn arrow-btn'>
                          <a href='#'>
                            <span className='arrow'>
                              <i className='far fa-arrow-down'></i>
                            </span>
                            {item.banner.button.title}
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
                </div>
              ) : (
                <h2>Loading...</h2>
              )
            )
          ) : (
            <h2>Loading...</h2>
          )}
        </Slider>
        {console.log(banner)}
        <div className='title-content-section text-center'>
          <div className='container'>
            <div className='inner-section'>
              <h4>Asking the right questions</h4>
              <p>
                We understand your role is difficult. Finding the appropriate answers and translating those findings
                into useful actions solve your problems or challenges.
              </p>
            </div>
          </div>
        </div>
        <Slider
          infinite={false}
          arrows={false}
          asNavFor={nav3}
          ref={slider2}
          slidesToShow={1}
          swipeToSlide={false}
          draggable={false}
          // focusOnSelect={true}
          className='firstsection'>
          {banner.length === 4 ? (
            banner.map((item, el) => (
              <div key={el}>
                <div className='challenges-section'>
                  <div className='container'>
                    <div className='challenge-blocks'>
                      <div className='row'>
                        {item.ask.challanges.map((item) => (
                          <div className='single-challenge-blog col-md-6'>
                            <div className='blog-img' style={{ background: "#F0F1F3" }}>
                              <figure>
                                <img src={item.image} alt='' />
                              </figure>
                            </div>
                            <div className='blog-content'>
                              <div className='inner-blog-content'>
                                <span className='challenge-tag'>{item.small_heading}</span>
                                <h3>{item.heading}</h3>
                                <div className='arrow-btn'>
                                  <a href={item.link.url}>
                                    {item.link.title}
                                    <span className='arrow'>
                                      <i className='far fa-arrow-right'></i>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='know-more-section'>
                      <div className='inner-blk text-center'>
                        <h5> {item.ask.button_text}</h5>
                        <div className='btn-blk yellow-bg'>
                          <a href='#' className='cta-btn'>
                            {item.ask.button.title}
                          </a>
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
              </div>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </Slider>

        <Slider
          infinite={false}
          arrows={false}
          asNavFor={nav4}
          ref={slider3}
          slidesToShow={1}
          swipeToSlide={false}
          draggable={false}
          // focusOnSelect={true}
        >
          {banner.length === 4 ? (
            banner.map((item, index) => (
              <div key={index}>
                <div className='circle-story-section'>
                  <div className='circle-blk-section'>
                    <div className='inner-circle-blk'>
                      <div className='container'>
                        <div className='inner-blk'>
                          <div className='row'>
                            <div className='content-blk col-md-6'>
                              <div className='inner-content-blk'>
                                <span className='education-row'>Higher Education Success Story</span>

                                <h3>{item.sucess_story[0].title}</h3>
                                <p>{item.sucess_story[0].description}</p>
                                <div className='arrow-btn'>
                                  <a href={item.sucess_story[0].link}>
                                    Discover more
                                    <span className='arrow'>
                                      <i className='far fa-arrow-right'></i>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='img-blk col-md-6'>
                              <div className='inner-img-blk'>
                                <div className='main-img'>
                                  <figure>
                                    <img src={storyimg} alt='Story Image' />
                                  </figure>
                                </div>
                                <div className='logo-img'>
                                  <figure>
                                    <img src={ManchesterLogo} alt='manchester' />
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='story-blk'>
                    <div className='container'>
                      <div className='inner-story-blk'>
                        <div className='row'>
                          <div className='single-story col-md-6'>
                            <div className='inner-single-story'>
                              <div className='content-blk'>
                                <div className='inner-content-blk'>
                                  <span className='education-row'>Higher Education Success Story</span>
                                  <h4>{item.sucess_story[1].title}</h4>
                                  <div className='arrow-btn'>
                                    <a href={item.sucess_story[1].link}>
                                      Discover more
                                      <span className='arrow'>
                                        <i className='far fa-arrow-right'></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className='logo-blk'>
                                <figure>
                                  <img src={ManchesterLogo} alt='manchester' />
                                </figure>
                              </div>
                            </div>
                          </div>

                          <div className='single-story col-md-6'>
                            <div className='inner-single-story'>
                              <div className='content-blk'>
                                <div className='inner-content-blk'>
                                  <span className='education-row'>Higher Education Success Story</span>
                                  <h4>{item.sucess_story[2].title}</h4>
                                  <div className='arrow-btn'>
                                    <a href={item.sucess_story[2].link}>
                                      Discover more
                                      <span className='arrow'>
                                        <i className='far fa-arrow-right'></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className='logo-blk'>
                                <figure>
                                  <img src={EastLondon} alt='manchester' />
                                </figure>
                              </div>
                            </div>
                          </div>
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
              </div>
            ))
          ) : (
            <h3>Loading....</h3>
          )}
        </Slider>

        <Slider
          infinite={false}
          arrows={false}
          asNavFor={nav5}
          ref={slider4}
          slidesToShow={1}
          swipeToSlide={false}
          draggable={false}
          // focusOnSelect={true}
        >
          {banner.length === 4 ? (
            banner.map((item, index) => (
              <div key={index}>
                <div className='premium-product-section'>
                  <div className='inner-premium-product' style={{ background: "#36FF9C" }}>
                    <div className='container'>
                      <div className='inner-content'>
                        <div className='row'>
                          <div className='content-blk col-md-6'>
                            <div className='inner-content-blk'>
                              <span>{item.cta.small_heading}</span>
                              <h2>{item.cta.heading}</h2>
                              <div className='btn-blk'>
                                <a href={item.cta.button.url} className='cta-btn'>
                                  {item.cta.button.title}
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className='img-blk col-md-6'>
                            <div className='inner-img-blk' style={{ background: `url(${NiicoBg})` }}>
                              <figure>
                                <img src={item.cta.image} alt='Niico' />
                              </figure>
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
              </div>
            ))
          ) : (
            <h3>Loading....</h3>
          )}
        </Slider>

        <Slider
          infinite={false}
          arrows={false}
          asNavFor={nav1}
          ref={slider5}
          slidesToShow={1}
          swipeToSlide={false}
          draggable={false}
          // focusOnSelect={true}
        >
          {banner.length === 4 ? (
            banner.map((item, index) => (
              <div>
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
                                <figure>
                                  <img src={thinklab.image} alt='Blog Image' />
                                </figure>
                                <span className='blog-cat'>Thought Piece</span>
                              </div>
                            </div>

                            <div className='blog-content'>
                              <div className='inner-blog-content'>
                                <h4>{thinklab.title}</h4>
                                <p>{thinklab.description}</p>

                                <div dangerouslySetInnerHTML={{ __html: thinklab.author_detail }}></div>

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
                        {item.button.title}
                      </a>
                    </div>
                  </div>
                  <div className='pattern-img desktop'>
                    <figure>
                      <Pattern4 />
                    </figure>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3>Loading....</h3>
          )}
        </Slider>
        {staticData ? (
          <section className='logo-wrap-section'>
            <div className='inner-logo-wrap-section'>
              <div className='container'>
                <div className='row'>
                  <div className='section-heading col-md-6'>
                    {staticData.high_profile ? <h3>{staticData.high_profile.title}</h3> : <h3>Loading....</h3>}
                  </div>
                  <div className='logo-blk col-md-6'>
                    <div className='inner-logo-blk'>
                      {staticData.high_profile.profiles ? (
                        staticData.high_profile.profiles.map((img) => (
                          <div className='single-logo'>
                            <figure>
                              <img src={img.profile_image} />
                            </figure>
                          </div>
                        ))
                      ) : (
                        <h3>Loading....</h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='pattern-img desktop'>
              <figure>
                <Pattern5 />
              </figure>
            </div>
          </section>
        ) : (
          <h3>Loading....</h3>
        )}
        {staticData ? (
          <section className='get-in-touch'>
            <div className='container'>
              <div className='inner-get-blk' style={{ background: `#262D52 url(${GetTouchBg})` }}>
                <div className='row'>
                  <div className='content-blk col-md-8'>
                    <div className='inner-content-blk'>
                      {staticData.call_to_action.title ? (
                        <h2>{staticData.call_to_action.title}</h2>
                      ) : (
                        <h2>Loading...</h2>
                      )}

                      {staticData.call_to_action.description ? (
                        <p>{staticData.call_to_action.description}</p>
                      ) : (
                        <h2>Loading...</h2>
                      )}
                      <div className='btn-blk'>
                        <a href={staticData.call_to_action.button.url} className='cta-btn'>
                          {staticData.call_to_action.button.title
                            ? staticData.call_to_action.button.title
                            : "loading..."}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='img-blk col-md-4'>
                    <div className='inner-img-blk'>
                      <figure>
                        <img src={staticData.call_to_action.image ? staticData.call_to_action.image : ""} alt='' />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <h3>Loading....</h3>
        )}
      </div>
    </div>
  );
}
