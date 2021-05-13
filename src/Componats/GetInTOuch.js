import React from "react";
import GetTouchBg from "../assets/img/get-line-img.svg";
export default function GetInTOuch({ staticData }) {
  return (
    <section className='get-in-touch'>
      <div className='container'>
        <div className='inner-get-blk' style={{ background: `#262D52 url(${GetTouchBg})` }}>
          <div className='row'>
            <div className='content-blk col-md-8'>
              <div className='inner-content-blk'>
                {staticData.title ? <h2>{staticData.title}</h2> : <h2>L</h2>}

                {staticData.description ? <p>{staticData.description}</p> : <h2></h2>}
                {staticData.button.url ? (
                  <div className='btn-blk'>
                    <a href={staticData.button.url} className='cta-btn'>
                      {staticData.button.title ? staticData.button.title : "loading..."}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
            <div className='img-blk col-md-4'>
              {staticData.image ? (
                <div className='inner-img-blk'>
                  <figure>
                    <img src={staticData.image ? staticData.image : null} alt='' />
                  </figure>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
