import React from "react";
import Link from "next/link";

const PlatformBanner = () => {
  return (
    <div className="main-banner edu-banner ">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-5">
                <div className="hero-content">
                  <h1 className="animate__animated animate__zoomIn animate__delay-0.1">
                    Yatırım Olanaklarına <br />{" "}
                    <span>her an ve her yerde erişim</span>
                  </h1>
                  <p className="animate__animated animate__fadeInUp animate__delay-0.1">
                    {" "}
                    Yatırım yapmak hiç bu kadar kolay olamamıştı.Üst düzey
                    yatırım platformunda aradığınız herşey tercih ettiğiniz
                    cihazda.
                  </p>

                  <div className="d-flex h-100 justify-content-between align-items-center trade-info">
                    <div className="text-center">
                      <h2 className="animate__animated animate__zoomIn animate__delay-1s">
                        50 <span className="try">₺</span>
                      </h2>
                      <span>
                        Minimum Yatırım <br />
                        Miktarı
                      </span>
                    </div>
                    <div className="text-center">
                      <h2 className="animate__animated animate__zoomIn animate__delay-1s">
                        {" "}
                        100 <span className="try">₺</span>
                      </h2>
                      <span>
                        Minimum Çekim <br />
                        Miktarı
                      </span>
                    </div>
                    <div className="text-center">
                      <h2 className="animate__animated animate__zoomIn animate__delay-1s">
                        1<span className="try">₺</span>
                      </h2>
                      <span>
                        Minimum İşlem <br />
                        Miktarı
                      </span>
                    </div>
                  </div>
                  <Link href="/contact">
                    <a className="btn btn-primary">Hemen Başla</a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 offset-lg-1">
                <div className="">
                  <img
                    src="/images/banner-image/prod-plat/main-pic.png"
                    className="animate__animated animate__fadeInDown animate__delay-0.1"
                    alt="main-pic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape1">
        <img src="/images/shape1.png" alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
      <div className="shape3">
        <img src="/images/shape3.svg" alt="shape" />
      </div>
      <div className="shape4">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape5">
        <img src="/images/shape5.png" alt="shape" />
      </div>
      <div className="shape6 rotateme">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape7">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </div>
  );
};

export default PlatformBanner;
