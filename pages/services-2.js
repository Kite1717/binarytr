import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import PlatformBanner from "@/components/ITStartup/PlatformBanner";

import FunFactsArea from "@/components/Common/FunFactsArea";
const options = {
    items: 5,
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
}
const Services2 = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <Navbar />

            <PlatformBanner/>
            <FunFactsArea/>
            <div className="">
            <div className="team-area ptb-80 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Dünyanın En Güvenilir Varlıklarına Yatırım Yapın</h2>
                    <div className="bar"></div>
                    <p>50'den Fazla Kullanabilir Varlık</p>
                </div>
            </div>

            {display ? <OwlCarousel 
                className="team-slider owl-carousel owl-theme owl-theme-style"
                {...options}
            > 
                <div className="single-team">
                    <div className="team-image2">
                        <img src="/images/plat-image/1.jpg" alt="image" />
                    </div>
                </div>
                <div className="single-team">
                    <div className="team-image2">
                        <img src="/images/plat-image/2.jpg" alt="image" />
                    </div>
                </div>
                <div className="single-team">
                    <div className="team-image2">
                        <img src="/images/plat-image/3.jpg" alt="image" />
                    </div>
                </div>
                <div className="single-team">
                    <div className="team-image2">
                        <img src="/images/plat-image/4.jpg" alt="image" />
                    </div>
                </div>
                <div className="single-team">
                    <div className="team-image2">
                        <img src="/images/plat-image/5.jpg" alt="image" />
                    </div>
                </div>
                <div className="single-team">
                    <div className="team-image2">
                        <img src="/images/plat-image/6.jpg" alt="image" />
                    </div>
                </div>
                <div className="single-team">
                    <div className="team-image2">
                        <img src="/images/plat-image/7.jpg" alt="image" />
                    </div>
                </div>

            
            </OwlCarousel> : ''}
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
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div> 
 
            <Footer />
        </>
    )
}

export default Services2;