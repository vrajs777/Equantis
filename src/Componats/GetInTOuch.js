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
                {staticData.call_to_action.title ? <h2>{staticData.call_to_action.title}</h2> : <h2>Loading...</h2>}

                {staticData.call_to_action.description ? (
                  <p>{staticData.call_to_action.description}</p>
                ) : (
                  <h2>Loading...</h2>
                )}
                <div className='btn-blk'>
                  <a href={staticData.call_to_action.button.url} className='cta-btn'>
                    {staticData.call_to_action.button.title ? staticData.call_to_action.button.title : "loading..."}
                  </a>
                </div>
              </div>
            </div>
            <div className='img-blk col-md-4'>
              <div className='inner-img-blk'>
                <figure>
                  <img src={staticData.call_to_action.image ? staticData.call_to_action.image : null} alt='' />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
