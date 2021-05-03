import React from "react";
import { ReactComponent as Pattern5 } from "../assets/img/pattern5.svg";
export default function LogoWrap({ staticData }) {
  return (
    <section className='logo-wrap-section'>
      <div className='inner-logo-wrap-section'>
        <div className='container'>
          <div className='row'>
            <div className='section-heading col-md-6'>
              {staticData ? <h3>{staticData.title}</h3> : <h3>Loading....</h3>}
            </div>
            <div className='logo-blk col-md-6'>
              <div className='inner-logo-blk'>
                {staticData.profiles ? (
                  staticData.profiles.map((img, index) => (
                    <div className='single-logo' key={index + "logo"}>
                      <figure>{img.profile_image ? <img src={img.profile_image} /> : null}</figure>
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
  );
}
