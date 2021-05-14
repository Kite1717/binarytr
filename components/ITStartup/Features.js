import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";

const Features = () => {
  return (
    <div className="boxes-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-box">
              <div className="icon">
                <img alt="deposit-icon" src="/images/features/para.svg" />
              </div>

              <h3>
                <Link href="/feature-details">
                  <a>Esnek Yatırım</a>
                </Link>
              </h3>

              <p>
                Son trendler: hızlı ve dijital ticaret , exspres alım satım
                dakikalar içinde kazanç.. %90 e varan ödemeler.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-box">
              <div className="icon">
                <img alt="edu-icon" src="/images/features/egitim.svg" />
              </div>

              <h3>
                <Link href="/feature-details">
                  <a>Kapsamlı Eğitim</a>
                </Link>
              </h3>

              <p>
                Eğitim bölümümüz de webtrader işlemleri ile ilgili eğitim
                videoları bulabilir, piyasa bilgileri için danışmanlarımızla
                bağlantı kurabilirsiniz.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-box">
              <div className="icon">
                <img alt="customer-icon" src="/images/features/musteri.svg" />
              </div>

              <h3>
                <Link href="/feature-details">
                  <a>Demo Hesap</a>
                </Link>
              </h3>

              <p>
                Demo hesap ile sanal para kullanarak platformun tüm
                avantajlarını deneyin. Yatırım gerektirmez, risk yoktur.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-box">
              <div className="icon">
                <img alt="cok-icon" src="/images/features/yatirim.svg" />
              </div>

              <h3>
                <Link href="/feature-details">
                  <a>Çok Çeşitli Yatırım Enstrümanları</a>
                </Link>
              </h3>

              <p>
                Tüm yatırımcılar için uygun varlıklar: döviz, emtia, hisse
                senetleri, kripto paralar, indeksler.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
