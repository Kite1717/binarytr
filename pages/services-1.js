import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import EducationBanner from "@/components/ITStartup/EducationBanner";
import Link from "next/link";
import * as Icon from "react-feather";

const Services1 = () => {
  return (
    <>
      <Navbar />

     <EducationBanner/>

      <div className="services-area-two pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Eğitim Videoları</h2>
            <div className="bar"></div>
            <p>
              Eğitim videolarını izleyerek daha fazla bilgi sahibi olabilirsin.
            </p>
          </div>

          <div className="row justify-content-center">


            <div className="col-lg-6 col-sm-12">
              <div className="single-services-box">
                <h3>
                  <Link href="#">
                    <a>Üyelik hesabı nasıl açılır? </a>
                  </Link>
                </h3>
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/binary-tr.appspot.com/o/1.ea8b027b.mp4?alt=media&token=d3b16bb2-2f18-4acf-8fea-dedb0da34f0c"
                ></video>
              </div>
            </div>

                
            <div className="col-lg-6 col-sm-12">
              <div className="single-services-box">
                <h3>
                  <Link href="#">
                    <a>İşlem nasıl açılır?  </a>
                  </Link>
                </h3>
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/binary-tr.appspot.com/o/2.d11c5f35.mp4?alt=media&token=951818b7-1957-4f05-a1c3-feff221a4b39"
                ></video>
              </div>
            </div>


            <div className="col-lg-6 col-sm-12">
              <div className="single-services-box">
                <h3>
                  <Link href="#">
                    <a>İşlem geçmişi ve raporlama nasıl yapılır? </a>
                  </Link>
                </h3>
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/binary-tr.appspot.com/o/3.e05e892c.mp4?alt=media&token=a8682f03-22d8-4ed2-8d17-176a19215a73"
                ></video>
              </div>
            </div>


            <div className="col-lg-6 col-sm-12">
              <div className="single-services-box">
                <h3>
                  <Link href="#">
                    <a>Hesaplar arası geçiş ve options ayarları nasıl yapılır? </a>
                  </Link>
                </h3>
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/binary-tr.appspot.com/o/4.b16d168d.mp4?alt=media&token=6ac29ea0-0c3e-4f39-a57c-c02b87b06d06"
                ></video>
              </div>
            </div>


            <div className="col-lg-6 col-sm-12">
              <div className="single-services-box">
                <h3>
                  <Link href="#">
                    <a>Açılan işlemde erken kapatma nasıl yapılır? </a>
                  </Link>
                </h3>
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/binary-tr.appspot.com/o/5.b81bf3ab.mp4?alt=media&token=b209b4d6-293f-456d-97ca-aa2223a01146"
                ></video>
              </div>
            </div>


            <div className="col-lg-6 col-sm-12">
              <div className="single-services-box">
                <h3>
                  <Link href="#">
                    <a>Ekran ve Grafik ayarları nasıl yapılır? </a>
                  </Link>
                </h3>
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/binary-tr.appspot.com/o/6.4c2354bc.mp4?alt=media&token=b4875001-da50-478e-87f6-882df31c900b"
                ></video>
              </div>
            </div>


            <div className="col-lg-6 col-sm-12">
              <div className="single-services-box">
                <h3>
                  <Link href="#">
                    <a>Grafik düzenleme nasıl yapılır? </a>
                  </Link>
                </h3>
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/binary-tr.appspot.com/o/7.24304aaa.mp4?alt=media&token=f9320708-f77d-4fec-bd62-9df914167d5d"
                ></video>
              </div>
            </div>



            <div className="col-lg-6 col-sm-12">
              <div className="single-services-box">
                <h3>
                  <Link href="#">
                    <a>Grafik renklendirme ayarları nasıl yapılır? </a>
                  </Link>
                </h3>
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/binary-tr.appspot.com/o/8.9d195941.mp4?alt=media&token=6602d402-74a4-42a6-a402-c212b00c0ae4"
                ></video>
              </div>
            </div>


            <div className="col-lg-6 col-sm-12">
              <div className="single-services-box">
                <h3>
                  <Link href="#">
                    <a>Güvenli çıkış nasıl yapılır? </a>
                  </Link>
                </h3>
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/binary-tr.appspot.com/o/9.582055b3.mp4?alt=media&token=8e687489-4be0-4033-8fa9-2c424d6ae734"
                ></video>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services1;
