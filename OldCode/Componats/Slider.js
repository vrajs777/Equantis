import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../styles.css";
export default function SliderMain() {
  const [nav1, setNav1] = useState(null);
  const [index, setIndex] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  const [nav4, setNav4] = useState(null);
  const [nav5, setNav5] = useState(null);
  const [laoding, setLoading] = useState(false);
  const [data, setData] = useState();
  const [option, setOption] = useState("Your_bussness");
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);
  const slider4 = useRef(null);
  const slider5 = useRef(null);

  useEffect(() => {
    setLoading(true);
    setNav1(slider1.current);
    slider1.current.slickGoTo(0);
    setNav2(slider2.current);
    setNav3(slider3.current);
    setNav4(slider4.current);
    setNav5(slider5.current);
    setIndex(0);
    fetch("https://run.mocky.io/v3/aa4d7762-6fd9-45aa-9ba3-51d89b8a722f")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let datas = data[0];

        Object.keys(datas).forEach(function (key) {
          if (key == option) {
            //  console.log(data, key);
            var value = datas[key];
            setData(value);
            setLoading(false);
            return false;
          }
        });
      });
  }, [option]);

  const settings = {
    loop: true,
    infinite: false,
    // autoplay: true,
    dots: true,
    arrows: false,
    // autoplaySpeed: 3000,

    beforeChange: function (currentSlide, nextSlide) {
      // console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      // console.log("after change", currentSlide);
      setIndex(currentSlide);
    },
  };
  const handleChange = (e) => {
    setOption(e.target.value);
  };
  return (
    <div>
      <select onChange={handleChange} value={option}>
        <option value='Your_bussness'>Your_bussness</option>
        <option value='Heigher_Education'>Heigher_Education</option>
        <option value='MemberShip'>MemberShip</option>
        <option value='Not_for_profit'>Not_for_profit</option>
      </select>

      <div style={{ opacity: laoding ? 1 : 0 }}>loading....</div>

      <div style={{ opacity: laoding ? 0 : 1 }}>
        <h4> slider</h4>

        <Slider asNavFor={nav2} ref={slider1} {...settings} className='banner'>
          <div>
            <h3>Main Banner 1</h3>
          </div>
          <div>
            <h3>Main Banner 2</h3>
          </div>
          <div>
            <h3>Main Banner 3</h3>
          </div>
          <div>
            <h3>Main Banner 4</h3>
          </div>
        </Slider>

        <div className='static'>
          <h4>static section</h4>
        </div>

        {/* {console.log(
            data ? data.Yellow.map((i, el) => console.log(i, el)) : "loading "
          )} */}

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
          {data ? (
            data.Yellow.map((i, el) =>
              index === el ? (
                <div key={i.index}>
                  <h2>{i.index + 1}</h2>
                  <h2>{i.name}</h2>
                </div>
              ) : (
                <div key={i.index}>{/* <h2>loading...</h2>
                      <h2>loading...</h2> */}</div>
              )
            )
          ) : (
            <h2>loading</h2>
          )}
          {/* {data.map((i, el) => {
              // console.log(index, "index", el);
              if (index === el) {
                return (
                  <div>
                    <h2>{i.index}</h2>
                    <h2>{i.index}</h2>
                  </div>
                );
              } else {
                return (
                  <div>
                    <h2>data</h2>
                    <h2>data</h2>
                  </div>
                );
              }
            })} */}
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
          {data ? (
            data.Blue.map((i, el) =>
              index === el ? (
                <div key={i.index}>
                  <h2>{i.index + 1}</h2>
                  <h2>{i.email}</h2>
                </div>
              ) : (
                <div key={i.index}>{/* <h2>loading...</h2>
                      <h2>loading...</h2> */}</div>
              )
            )
          ) : (
            <h2>loading</h2>
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
          {data ? (
            data.Pink.map((i, el) =>
              index === el ? (
                <div key={i.index}>
                  <h2>{i.index + 1}</h2>
                  <h2>{i.about}</h2>
                </div>
              ) : (
                <div key={i.index}>{/* <h2>loading...</h2>
                      <h2>loading...</h2> */}</div>
              )
            )
          ) : (
            <h2>loading</h2>
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
          {data ? (
            data.Orange.map((i, el) =>
              index === el ? (
                <div key={i.index}>
                  <h2>{i.index + 1}</h2>
                  <h2>{i.email}</h2>
                </div>
              ) : (
                <div key={i.index}>{/* <h2>loading...</h2>
                      <h2>loading...</h2> */}</div>
              )
            )
          ) : (
            <h2>loading</h2>
          )}
        </Slider>
      </div>
    </div>
  );
}

{
  /*<div> <div className='banner-section'>
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
          </div>*/
}
{
  /* <div>
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
          </div>

          <div>
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
          </div>

          <div>
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
          </div>*/
}
