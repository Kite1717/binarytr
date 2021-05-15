import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

import useTranslation from 'next-translate/useTranslation'

const Footer = () => {
    const { t } = useTranslation('footer')

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-f7fafd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="/it-startup">
                                    <a>
                                        <img src="/images/logo.png" alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            <p className="des">Finansal piyasalarda alım satım yapmak riskler taşır. Ticaret yapmaya karar vermeden önce, ilgili riskleri anladığınızdan ve yatırım hedeflerinizi ve deneyim seviyenizi hesaba kattığınızdan emin olmanız gerekir. <br /> Bu sitede yer alan tüm içerik ve hizmetler telif haklarına tabidir ve tüm hakları Binary Trade firmasına aittir. <br /> Alan adının sahibi Binary Trade firmasıdır. Bu web sitesi üzerinde gerçekleştirilen tüm brokerlik faaliyetleri Binary Trade firması tarafından sağlanmaktadır. </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Company</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/about-1">
                                        <a>About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services-1">
                                        <a>Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/features">
                                        <a>Features</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pricing">
                                        <a>Our Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1">
                                        <a>Latest News</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Destek</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/faq">
                                        <a>RİSK BEYANI</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq">
                                        <a>Şartlar ve Koşullar</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq">
                                        <a>AML ve KYC Politikası</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq">
                                        <a>Gizlilik Politikası</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>İletişim</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Adres</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <Icon.MapPin />
                                    27 Division St, New York, <br /> NY 10002, USA
                                </li>
                                <li>
                                    <Icon.Mail />
                                    Email: <a href="mailto:info@sekizfx1.com">info@sekizfx1.com</a>
                                </li>
                                <li>
                                    <Icon.PhoneCall />
                                    Phone: <a href="tel:321984754">+ (321) 984 754</a>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li>
                                    <Link href="#">
                                        <a className="facebook" target="_blank"><Icon.Facebook /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="twitter" target="_blank"><Icon.Twitter /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="instagram" target="_blank"><Icon.Instagram /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="linkedin" target="_blank"><Icon.Linkedin /></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>Copyright &copy; {currentYear} BinaryTR. {t('copyright')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/images/map.png" className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </footer>
    )

}

export default Footer;
