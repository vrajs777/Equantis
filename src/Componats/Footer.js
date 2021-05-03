import React, { useEffect, useState } from "react";
export default function Footer() {
  const [footer, setFooter] = useState();
  useEffect(() => {
    fetch("https://staging.project-progress.net/projects/equantiis/wp-json/industry-expertise/lp")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let FooterData = data.footer;
        setFooter(FooterData);
      });
  }, []);
  return (
    <footer className='site-footer'>
      {footer ? (
        <div className='container'>
          <div className='footer-logo-blk'>
            <figure>
              <a href={footer.logo_url}>
                <img src={footer.logo ? footer.logo : null} />
              </a>
            </figure>
          </div>
          <div className='bottom-footer'>
            <div className='row'>
              <div className='social-blk col-md-3'>
                <div className='inner-blk'>
                  <div className='blk-title'>
                    <span>{footer.social_hading ? footer.social_hading : null}</span>
                  </div>
                  {footer.show_social ? (
                    <div className='social-icon'>
                      <ul>
                        <li>
                          <a href='#'>
                            <i className='fab fa-linkedin-in'></i>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fab fa-twitter'></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className='ask-blk col-md-3'>
                <div className='btn-blk yellow-bg'>
                  <a href={footer.ask_us.url} className='cta-btn'>
                    {footer.ask_us.title ? footer.ask_us.title : null}
                  </a>
                </div>
              </div>
              <div className='links-blk col-md-3'>
                <div className='blk-title'>
                  <span>Quick links</span>
                </div>

                <div className='blk-links'>
                  <ul>
                    {footer.quick_link_menu ? (
                      footer.quick_link_menu.map((data, index) => (
                        <li key={index}>
                          <a href={data.url}>{data.title}</a>
                        </li>
                      ))
                    ) : (
                      <li>Loading...</li>
                    )}
                  </ul>
                </div>
              </div>

              <div className='legal-blk col-md-3'>
                <div className='blk-title'>
                  <span>Legal</span>
                </div>

                <div className='blk-links'>
                  <ul>
                    {footer.legal_menu ? (
                      footer.legal_menu.map((data, index) => (
                        <li key={index}>
                          <a href={data.url}>{data.title}</a>
                        </li>
                      ))
                    ) : (
                      <li>Loading...</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='copyright-blk'>
            <span>{footer.copyright ? footer.copyright : null}</span>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </footer>
  );
}
