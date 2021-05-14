import React, { useState } from "react";
import * as Icon from "react-feather";
import Link from "next/link";
const ServicesArea = () => {
  return (
    <>
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12 col-md-12 services-content">
            <div className="">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="/images/logo.png"
                  className="animate__animated animate__fadeInDown animate__delay-0.2s"
                  alt="big-monitor"
                />
              </div>
              <div className="video-container">
                <video
                  loop
                  playsInline=""
                  autoPlay
                  muted
                  src="https://firebasestorage.googleapis.com/v0/b/binary-tr.appspot.com/o/main.mp4?alt=media&token=7209a44b-8674-4f11-b2af-67c653d8b082"
                ></video>
              </div>
              <iframe
                scrolling="no"
                allowtransparency="true"
                frameborder="0"
                width="100%"
                height="50"
                src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=tr#%7B%22symbols%22:%5B%7B%22description%22:%22EUR/UDS%22,%22proName%22:%22OANDA:EURUSD%22%7D,%7B%22description%22:%22GBP/USD%22,%22proName%22:%22OANDA:GBPUSD%22%7D,%7B%22description%22:%22EUR/GBP%22,%22proName%22:%22OANDA:EURGBP%22%7D,%7B%22description%22:%22USD/TRY%22,%22proName%22:%22OANDA:USDTRY%22%7D,%7B%22description%22:%22EUR/TRY%22,%22proName%22:%22OANDA:EURTRY%22%7D,%7B%22description%22:%22GBP/TRY%22,%22proName%22:%22CURRENCYCOM:GBPTRY%22%7D,%7B%22description%22:%22BTC/USD%22,%22proName%22:%22COINBASE:BTCUSD%22%7D,%7B%22description%22:%22ETH/USD%22,%22proName%22:%22COINBASE:ETHUSD%22%7D,%7B%22description%22:%22NAS100%22,%22proName%22:%22GLOBALPRIME:NAS100%22%7D,%7B%22description%22:%22SP500%22,%22proName%22:%22EURONEXT:SP5%22%7D,%7B%22description%22:%22BIST%22,%22proName%22:%22BIST:XSIST%22%7D,%7B%22description%22:%22GER30%22,%22proName%22:%22GLOBALPRIME:GER30%22%7D,%7B%22description%22:%22DOW30%22,%22proName%22:%22AMEX:UDOW%22%7D%5D,%22showSymbolLogo%22:true,%22colorTheme%22:%22light%22,%22largeChartUrl%22:%22https://forextebugun.com/symbol%22,%22isTransparent%22:false,%22displayMode%22:%22adaptive%22,%22width%22:%22100%25%22,%22height%22:46,%22utm_source%22:%22reflexfx1.com%22,%22utm_medium%22:%22widget%22,%22utm_campaign%22:%22ticker-tape%22%7D"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 services-left-image">
              <img
                src="/images/services-left-image/sol_ekran.png"
                className="animate__animated animate__fadeInDown animate__delay-0.2s"
                alt="big-monitor"
              />
              <img
                src="/images/services-left-image/orta_ekran.png"
                className="animate__animated animate__fadeInLeft animate__delay-0.2s"
                alt="developer"
              />
              <img
                  src="/images/services-left-image/sag_ekran.png"
                  className="animate__animated animate__fadeInLeft animate__delay-0.2s"
                  alt="developer"
              />

              <img
                src="/images/services-left-image/cercle-shape.png"
                className="bg-image rotateme"
                alt="shape"
              />

              <img
                src="/images/services-left-image/bg_ekran.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="main-pic"
              />
            </div>

            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>Eğitim Videolarımız</h2>
                <div className="bar"></div>
                <p>
                  Eğitim videolarını izleyerek daha fazla bilgi sahibi
                  olabilirsiniz.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Link href="/services-1">
                      <a>
                        <Icon.Info /> Üyelik hesabı nasıl açılır?
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Link href="/services-1">
                      <a>
                        <Icon.Info /> İşlem nasıl açılır?
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Link href="/services-1">
                      <a>
                        <Icon.Info /> İşlem geçmişi ve raporlama nasıl yapılır?
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Link href="/services-1">
                      <a>
                        <Icon.Info />
                        Hesaplar arası geçiş ve options ayarları nasıl yapılır?
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Link href="/services-1">
                      <a>
                        <Icon.Info />
                        Açılan işlemde erken kapatma nasıl yapılır?
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Link href="/services-1">
                      <a>
                        <Icon.Info /> Ekran ve Grafik ayarları nasıl yapılır?
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Link href="/services-1">
                      <a>
                        <Icon.Info /> Grafik düzenleme nasıl yapılır?
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Link href="/services-1">
                      <a>
                        <Icon.Info /> Grafik renklendirme ayarları nasıl
                        yapılır?
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Link href="/services-1">
                      <a>
                        <Icon.Info /> Güvenli çıkış nasıl yapılır?
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;
