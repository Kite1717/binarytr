import React from 'react';
import Link from 'next/link';

const FunFactsArea = () => {
    return (
        <div className="funfacts-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>DAKİKADA KAZAN! BEKLEME YOK! ŞANSINIZI DENEYİN!</h2>
                    <div className="bar"></div>
                    <p>Bizden özel bir teklif alın. Şans sizden yana kazancınızı katlayın!</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>+50.000$</h3>
                            <p>Anında Bonus</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>+20.000$</h3>
                            <p>Haftalık Kullanım Bonusu</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>+12.000$</h3>
                            <p>Aylık Kullanım Bonusu</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>700+</h3>
                            <p>Platin Üyelik</p>
                        </div>
                    </div>
                </div>

                <div className="contact-cta-box">
                    <h3>Tek tıkla yatırım yap</h3>
                    <img src="/images/logo.png" alt="logo" />

                    <Link href="/contact">
                        <a className="btn btn-primary">Şimdi Göz Atın</a>
                    </Link>
                </div>

                <div className="map-bg">
                    <img src="/images/map.png" alt="map" />
                </div>
            </div>
        </div>
    )
}

export default FunFactsArea;