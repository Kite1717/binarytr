import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 4,
    loop: true,
    nav: false,
    autoplay: true,
    margin:30,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
}

const RecentWorks = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="works-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>Promosyonlarımız</h2>
                    <div className="bar"></div>
                    <p>Şimdi üye ol. Bonuslardan yaralanmaya hemen başla.</p>
                </div>
            </div>

            {display ? <OwlCarousel 
                className="works-slides owl-carousel owl-theme"
                {...options}
            > 
                
                <div className="single-works">
                    <img src="/images/works-image/deneme-bonus.jpg" alt="image" />

                    <Link href="/blog-1">
                        <a className="icon"><Icon.ArrowRightCircle /></a>
                    </Link>

                    <div className="works-content">
                        <h3>
                            <Link href="/blog-1">
                                <a>50 TL Deneme Bonusu</a>
                            </Link>
                        </h3>
                        <p>İlk yatırımızdan 50 TL bonus hediye !</p>
                    </div>
                </div>
        
                <div className="single-works">
                    <img src="/images/works-image/arkadas-bonus.jpg" alt="image" />

                    <Link href="/blog-1">
                        <a className="icon"><Icon.ArrowRightCircle /></a>
                    </Link>

                    <div className="works-content">
                        <h3>
                            <Link href="/blog-1">
                                <a>%40 Arkadaş Bonusu</a>
                            </Link>
                        </h3>
                        <p>Sizlerin tavsiyesi ile sitemize üye olan arkadaşlarınızın yapacakları ilk yatırımından, %40 referans bonusu kazanabilirsiniz.</p>
                    </div>
                </div>
    
                <div className="single-works">
                    <img src="/images/works-image/kayip-bonus.jpg" alt="image" />

                    <Link href="/blog-1">
                        <a className="icon"><Icon.ArrowRightCircle /></a>
                    </Link>
                    
                    <div className="works-content">
                        <h3>
                            <Link href="/blog-1"><a>%20 Kayıp Bonusu</a></Link>
                        </h3>
                        <p>Tüm bakiyenizin sıfırlanması durumunda, Tüm hafta boyunca kaybettiğiniz ana bakiyenizin %20’ sini tekrar hesabınıza ekliyoruz.</p>
                    </div>
                </div>
                <div className="single-works">
                    <img src="/images/works-image/yatirim-bonus.jpg" alt="image" />

                    <Link href="/blog-1">
                        <a className="icon"><Icon.ArrowRightCircle /></a>
                    </Link>
                    
                    <div className="works-content">
                        <h3>
                            <Link href="/blog-1"><a>%50 Yatırım Bonusu</a></Link>
                        </h3>
                        <p>İlk yatırımızdan başlayarak, devam edeceğiniz tüm yatırımlarınızda geçerli olarak %50 yatırım bonusu uygulanacaktır.</p>
                    </div>
                </div>
            </OwlCarousel> : ''}
            
            {/* Shape Images */}
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
        </div>
    )
}

export default RecentWorks;
