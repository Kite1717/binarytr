import React from "react";
import Link from "next/link";

const EducationBanner = () => {
  return (
    <div className="main-banner edu-banner ">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-5">
                <div className="hero-content">
                  <h1 className="animate__animated animate__zoomIn animate__delay-0.1">
                    <span >Eğitim Videolarını İzleyerek <br/></span> Daha Fazla Bilgi Sahibi Olabilirsin
                  </h1>
                  <Link href="/contact">
                    <a className="btn btn-primary">Hemen Başla</a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 offset-lg-1">
                <div className="">
                  <img
                    src="/images/banner-image/prod-edu/main-pic.png"
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

export default EducationBanner;
