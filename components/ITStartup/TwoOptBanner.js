import React from "react";
import Link from "next/link";

const TwoOptBanner = () => {
  return (
    <div className="main-banner edu-banner ">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-5">
                <div className="hero-content">
                  <h1 className="animate__animated animate__zoomIn animate__delay-0.1">
                    <span >İkili Opsiyon<br/></span> Tam Size Göre
                  </h1>
                  <p>Kısa sürede gelir elde etmek istiyorsanız ikili opsiyon tam size göre Kazanmaya hemen başla üye ol</p>
                  <Link href="/contact">
                    <a className="btn btn-primary">Hemen Başla</a>
                  </Link>
                  <div className="d-flex h-100 justify-content-between align-items-center apps">
                    <img className= "animate__animated animate__zoomIn animate__delay-0.1"  alt = "windows"src="/images/banner-image/prod-main/apps/win.png"/>
                    <img  className= "animate__animated animate__zoomIn animate__delay-0.1" alt = "apple"src="/images/banner-image/prod-main/apps/apple.png"/>
                    <img  className= "animate__animated animate__zoomIn animate__delay-0.1" alt = "android"src="/images/banner-image/prod-main/apps/android.png"/>
                    <img  className= "animate__animated animate__zoomIn animate__delay-0.1" alt = "browser"src="/images/banner-image/prod-main/apps/browser.png"/>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 offset-lg-1">
                <div className="">
                  <img
                    src="/images/banner-image/prod-two/main-pic.png"
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

export default TwoOptBanner;
