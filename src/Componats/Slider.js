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
import GetInTOuch from "./GetInTOuch";
import LogoWrap from "./LogoWrap";
import FixedNav from "./FixedNav";
const SliderMain = (props) => {
  const [nav1, setNav1] = useState(null);
  const [ActiveDot, setActiveDot] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  const [nav4, setNav4] = useState(null);
  const [nav5, setNav5] = useState(null);
  const [stickyData, setStickyData] = useState(null);
  const [laoding, setLoading] = useState(true);
  const [newdata, setNewData] = useState();
  const [staticData, setstaticData] = useState();
  const [banner, setBanner] = useState([]);
  const [Length, setLength] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);
  const slider4 = useRef(null);
  const slider5 = useRef(null);
  const myRef = useRef(null);
  const ChangeSlider = (event, i) => {
    slider1.current.slickGoTo(i);
  };
  useEffect(() => {
    setLoading(true);
    setBanner([]);
    setLength(0);
    setNav1(slider1.current);
    slider1.current.slickGoTo(0);
    setNav2(slider2.current);
    setNav3(slider3.current);
    setNav4(slider4.current);
    setNav5(slider5.current);
    window.scrollTo({ behavior: "smooth", top: 0 });
    fetch("https://staging.project-progress.net/projects/equantiis/wp-json/industry-expertise/lp")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let newData = data.body.content_dynamic;
        let staticDatas = data.body.content_static;

        setNewData(newData);
        Object.keys(newData).forEach(function (key, index) {
          if (key == props.location.hash.split("#")[1]) {
            var value = newData[key];

            for (const k in value) {
              if (k !== "sticky") {
                setBanner((oldFiles) => [...oldFiles, value[k]]);
              } else {
                setStickyData(value["sticky"]);
              }
            }
          }
        });
        setstaticData(staticDatas);
      })
      .then((isload) => {
        setLength(banner.length);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [props.location.hash.split("#")[1]]);

  const settings = {
    loop: true,
    infinite: false,
    autoplay: true,
    dots: false,
    arrows: false,
    lazyLoad: false,
    swipe: false,
    adaptiveHeight: true,
    autoplaySpeed: 30000,
    initialSlide: 0,
    beforeChange: function (currentSlide, nextSlide) {
      setActiveDot(nextSlide);
    },
    afterChange: function (currentSlide) {
      // setIndex(currentSlide);
    },
  };

  return (
    <>
      {laoding && banner && banner.length === 0 && <Loader />}
      <div style={{ opacity: laoding && banner && banner.length === 0 ? 0 : 1 }}>
        <Slider asNavFor={nav2} ref={slider1} {...settings} className='banner'>
          {banner && banner.length > 0 ? (
            banner.map((item, el) =>
              item ? (
                <Banner
                  changeSliders={(value) => {
                    slider1.current.slickGoTo(value - 1);
                  }}
                  dots={banner}
                  item={item.banner}
                  currentDotIndex={ActiveDot}
                  myRef={myRef}
                  key={el + "banner"}
                />
              ) : null
            )
          ) : (
            <div></div>
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
          <div></div>
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
          className='firstsection'>
          {banner && banner.length > 0 ? (
            banner.map((item, el) => (item.ask ? <Ask item={item.ask} key={el + "ask"} /> : null))
          ) : (
            <div></div>
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
          adaptiveHeight={true}>
          {banner && banner.length > 0 ? (
            banner.map((item, index) =>
              item.sucess_story.length > 0 ? (
                <Sucess_story item={item.sucess_story} key={index + "sucess_story"} />
              ) : null
            )
          ) : (
            <div></div>
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
          adaptiveHeight={true}>
          {banner && banner.length > 0 ? (
            banner.map((item, index) => (item.cta ? <Cta_button item={item.cta} key={index + "cta"} /> : null))
          ) : (
            <div></div>
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
          draggable={false}>
          {banner && banner.length > 0 ? (
            banner.map((item, index) =>
              item.thinklabs.length > 0 ? <ThinksLab item={item} key={index + "thinklabs"} /> : null
            )
          ) : (
            <div></div>
          )}
        </Slider>
        {staticData ? <LogoWrap staticData={staticData.high_profile} /> : <div></div>}
        {staticData ? <GetInTOuch staticData={staticData.call_to_action} /> : <div></div>}
        {staticData ? (
          <FixedNav changeSlideOnCLick={ChangeSlider} ActiveDot={ActiveDot} staticData={stickyData} />
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
export default withRouter(SliderMain);
