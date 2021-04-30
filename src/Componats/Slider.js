import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "../assets/css/font-awesome.css";
import "../assets/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "../styles.css";
import Loader from "./Loader";
import { withRouter } from "react-router";
import Banner from "./Banner";
import Ask from "./Ask";
import Sucess_story from "./Sucess_story";
import Cta_button from "./Cta_button";
import ThinksLab from "./ThinksLab";
import { IndexKind } from "typescript";
import GetInTOuch from "./GetInTOuch";
import LogoWrap from "./LogoWrap";
const SliderMain = (props) => {
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
  const myRef = useRef(null);

  useEffect(() => {
    setOption(props.location.hash.split("#")[1]);
    setNav1(slider1.current);
    slider1.current.slickGoTo(0);
    setNav2(slider2.current);
    setNav3(slider3.current);
    setNav4(slider4.current);
    setNav5(slider5.current);
    setIndex(0);
    setLoading(true);
    fetch("https://staging.project-progress.net/projects/equantiis/wp-json/industry-expertise/lp")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(true);
        let newData = data.body.content_dynamic;
        let staticDatas = data.body.content_static;
        console.log(newData, staticDatas);
        setNewData(newData);
        setBanner([]);
        Object.keys(newData).forEach(function (key, index) {
          //  console.log(data, key);
          if (key == option) {
            var value = newData[key];
            // console.log(value);
            value.map((data) => setBanner((oldFiles) => [...oldFiles, data]));
          }
        });
        setstaticData(staticDatas);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [option, props.location.hash.split("#")[1]]);

  const settings = {
    loop: true,
    infinite: false,
    autoplay: true,
    dots: true,
    arrows: false,
    lazyLoad: true,
    adaptiveHeight: true,
    autoplaySpeed: 30000,
    initialSlide: 0,
    beforeChange: function (currentSlide, nextSlide) {
      // console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      // console.log("after change", currentSlide);
      setIndex(currentSlide);
    },
    onInit: function () {
      console.log("init");
    },
  };

  return (
    <>
      {laoding ? <Loader /> : null}
      <div style={{ opacity: laoding ? 0 : 1 }}>
        <Slider asNavFor={nav2} ref={slider1} {...settings} className='banner'>
          {banner && banner.length > 0 ? (
            banner.map((item, el) =>
              item ? (
                <Banner item={item.banner} myRef={myRef} key={el} />
              ) : (
                {
                  /* <h2>Data is Loading...</h2> */
                }
              )
            )
          ) : (
            <h2>Loading...</h2>
          )}
        </Slider>

        {staticData ? (
          <div className='title-content-section text-center' ref={myRef}>
            <div className='container'>
              <div className='inner-section'>
                {staticData.ask_us.title ? <h4>{staticData.ask_us.title}</h4> : null}
                {staticData.ask_us.description ? <p>{staticData.ask_us.description}</p> : null}
              </div>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}

        <Slider
          infinite={false}
          arrows={false}
          asNavFor={nav3}
          ref={slider2}
          slidesToShow={1}
          swipeToSlide={false}
          draggable={false}
          adaptiveHeight={true}
          // focusOnSelect={true}
          className='firstsection'>
          {banner && banner.length > 0 ? (
            banner.map((item, el) =>
              item.ask ? (
                <Ask item={item.ask} key={el} />
              ) : (
                {
                  /* <h2>Data is Loading...</h2> */
                }
              )
            )
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
          adaptiveHeight={true}
          // focusOnSelect={true}
        >
          {banner && banner.length > 0 ? (
            banner.map((item, index) =>
              item.sucess_story.length > 0 ? (
                <Sucess_story item={item.sucess_story} key={index} />
              ) : (
                {
                  /* <h2>Data is Loading...</h2> */
                }
              )
            )
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
          adaptiveHeight={true}
          // focusOnSelect={true}
        >
          {banner && banner.length > 0 ? (
            banner.map((item, index) =>
              item.cta ? (
                <Cta_button item={item.cta} />
              ) : (
                {
                  /* <h2>Data is Loading...</h2> */
                }
              )
            )
          ) : (
            <h3>Loading....</h3>
          )}
        </Slider>
        {/* Here we have added thinklabs as item bcz in thinksLabthere is two componats are mixed  */}
        <Slider
          infinite={false}
          arrows={false}
          asNavFor={nav1}
          ref={slider5}
          slidesToShow={1}
          swipeToSlide={false}
          adaptiveHeight={true}
          draggable={false}
          // focusOnSelect={true}
        >
          {banner && banner.length > 0 ? (
            banner.map((item, index) =>
              item.thinklabs.length > 0 ? (
                <ThinksLab item={item} key={index} />
              ) : (
                {
                  /* <h2>Data is Loading...</h2> */
                }
              )
            )
          ) : (
            <h3>Loading....</h3>
          )}
        </Slider>
        {staticData ? <LogoWrap staticData={staticData} /> : <h3>Loading....</h3>}
        {staticData ? <GetInTOuch staticData={staticData} /> : <h3>Loading....</h3>}
      </div>
    </>
  );
};
export default withRouter(SliderMain);
