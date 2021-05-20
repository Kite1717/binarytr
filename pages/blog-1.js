import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import * as Icon from 'react-feather';
import Link from 'next/link';

import PromBanner from "@/components/ITStartup/PromBanner";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

const Blog1 = () => {
    return (
        <>
            <Navbar />

            <PromBanner/>

            <div className="blog-area ptb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        {/*<div className="col-lg-12 col-md-12">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog-image/banner.webp" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> March 15, 2021
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <p>İlk yatırımızdan başlayarak, devam edeceğiniz tüm yatırımlarınızda geçerli olarak %50 yatırım bonusu uygulanacaktır.</p>
                                    <p>Yatırımınızla birlikte bonusunuzu tüm ürün çeşitlerinde kullanabilirsiniz.</p>
                                    <p>Bonusunuzdan faydalanmak için herhangi bir işlem şartı yoktur.</p>
                                    <p>Yatırımınızla birlikte size sağladığımız bonustan elde edeceğiniz tüm kazancınızı çekebilirsiniz.</p>
                                    <p>Çekim esnasında sadece bonus düşülür, bonustan oluşan kar çekilebilir.</p>
                                    <p>Bonus, minimum 50 TL, maksimum 5.000 TL yatırımlarınızda geçerlidir.</p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.ArrowRight />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog-image/kayıpp.webp" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> March 15, 2021
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <p>Tüm bakiyenizin sıfırlanması durumunda, Tüm hafta boyunca kaybettiğiniz ana bakiyenizin %20’ sini tekrar hesabınıza ekliyoruz.</p>
                                    <p>Minimum 100tl kaybınızın olması gerekmektedir.</p>
                                    <p>Bonusunuzu tüm ürün çeşitlerinde kullanabilirsiniz.</p>
                                    <p>Bonusunuzdan faydalanmak için herhangi bir işlem şartı yoktur.</p>
                                    <p>Haftalık kayıp bonusunuzu ise her pazar gecesi 23:59'dan sonra talep edebilirsiniz.</p>
                                    <p>Çekim sırasında, sizlere sağlamış olduğumuz haftalık %20 kayıp bonusu, ana bakiyenizden düşülerek kar ödemeniz yapılır. Yani çekim esnasında sadece bonus düşülür, bonustan oluşan kar çekilebilir.</p>
                                    <p>Bu bonusdan maksimum 2500 TL' ye kadar faydalanabilirsiniz.</p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.ArrowRight />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog-image/referans.webp" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> March 15, 2021
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <p>Sizlerin tavsiyesi ile sitemize üye olan arkadaşlarınızın yapacakları ilk yatırımından, %40 referans bonusu kazanabilirsiniz.</p>
                                    <p>Her arkadaşınız için Maksimum 500 TL’ ye kadar referans bonusu alabilirsiniz.</p>
                                    <p>Arkadaşınız hesabını açarken, referansını yazılı olarak operasyon departmanına bildirmelidir. Arkadaşınız, sizi referans olarak göstermesinin ardından, ilk yatırımı ile birlikte referans bonusunuz hesabınıza eklenecektir.</p>
                                    <p>Referans bonusunuzun geçerli olabilmesi için arkadaşınızın aktif olarak sistemi kullanması gerekmektedir. İşlem yapmadan çekim yapan arkadaşlarınızdan almış olduğunuz referans bonusu ve bu bonustan elde edeceğiniz kar, hesabınızdan silinir.</p>
                                    <p>Arkadaş referans bonusundan yararlanabilmek için, en az referans bonusu miktarı kadar hesabınızda bakiye olmalıdır.</p>
                                    <p>Referans bonusu ile elde edilen kar çekilebilir, referans bonusu çekilemez. Yani çekim esnasında bakiyenizden bonus düşülür, bonustan oluşan kar çekilebilir.</p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.ArrowRight />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>*/}
                        <div className="row align-items-center ">
                            <div className="col-lg-6 features-details-image">
                                <img
                                    src="/images/blog-image/PROMOSYONSAYFASI-04.png"
                                    className="animate__animated animate__fadeInUp"
                                    alt="image"
                                />
                            </div>
                            <div className="col-lg-6 features-details">
                                <div className="features-details-desc">
                                    <div className="blog-post-content">
                                        <p>Sizlerin tavsiyesi ile sitemize üye olan arkadaşlarınızın yapacakları ilk yatırımından, %40 referans bonusu kazanabilirsiniz.</p>
                                        <p>Her arkadaşınız için Maksimum 500 TL’ ye kadar referans bonusu alabilirsiniz.</p>
                                        <p>Arkadaşınız hesabını açarken, referansını yazılı olarak operasyon departmanına bildirmelidir. Arkadaşınız, sizi referans olarak göstermesinin ardından, ilk yatırımı ile birlikte referans bonusunuz hesabınıza eklenecektir.</p>
                                        <p>Referans bonusunuzun geçerli olabilmesi için arkadaşınızın aktif olarak sistemi kullanması gerekmektedir. İşlem yapmadan çekim yapan arkadaşlarınızdan almış olduğunuz referans bonusu ve bu bonustan elde edeceğiniz kar, hesabınızdan silinir.</p>
                                        <p>Arkadaş referans bonusundan yararlanabilmek için, en az referans bonusu miktarı kadar hesabınızda bakiye olmalıdır.</p>
                                        <p>Referans bonusu ile elde edilen kar çekilebilir, referans bonusu çekilemez. Yani çekim esnasında bakiyenizden bonus düşülür, bonustan oluşan kar çekilebilir.</p>

                                        {/*<Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.ArrowRight />
                                        </a>
                                    </Link>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center ">
                            <div className="col-lg-6 features-details">
                                <div className="features-details-desc">
                                    <div className="blog-post-content">
                                        <p>İlk yatırımızdan başlayarak, devam edeceğiniz tüm yatırımlarınızda geçerli olarak %50 yatırım bonusu uygulanacaktır.</p>
                                        <p>Yatırımınızla birlikte bonusunuzu tüm ürün çeşitlerinde kullanabilirsiniz.</p>
                                        <p>Bonusunuzdan faydalanmak için herhangi bir işlem şartı yoktur.</p>
                                        <p>Yatırımınızla birlikte size sağladığımız bonustan elde edeceğiniz tüm kazancınızı çekebilirsiniz.</p>
                                        <p>Çekim esnasında sadece bonus düşülür, bonustan oluşan kar çekilebilir.</p>
                                        <p>Bonus, minimum 50 TL, maksimum 5.000 TL yatırımlarınızda geçerlidir.</p>

                                        {/*<Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.ArrowRight />
                                        </a>
                                    </Link>*/}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 features-details-image">
                                <img
                                    src="/images/blog-image/PROMOSYONSAYFASI-01.png"
                                    className="animate__animated animate__fadeInUp"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="row align-items-center ">
                            <div className="col-lg-6 features-details-image">
                                <img
                                    src="/images/blog-image/PROMOSYONSAYFASI-02.png"
                                    className="animate__animated animate__fadeInUp"
                                    alt="image"
                                />
                            </div>
                            <div className="col-lg-6 features-details">
                                <div className="features-details-desc">
                                    <div className="blog-post-content">
                                        <p>Tüm bakiyenizin sıfırlanması durumunda, Tüm hafta boyunca kaybettiğiniz ana bakiyenizin %20’ sini tekrar hesabınıza ekliyoruz.</p>
                                        <p>Minimum 100tl kaybınızın olması gerekmektedir.</p>
                                        <p>Bonusunuzu tüm ürün çeşitlerinde kullanabilirsiniz.</p>
                                        <p>Bonusunuzdan faydalanmak için herhangi bir işlem şartı yoktur.</p>
                                        <p>Haftalık kayıp bonusunuzu ise her pazar gecesi 23:59'dan sonra talep edebilirsiniz.</p>
                                        <p>Çekim sırasında, sizlere sağlamış olduğumuz haftalık %20 kayıp bonusu, ana bakiyenizden düşülerek kar ödemeniz yapılır. Yani çekim esnasında sadece bonus düşülür, bonustan oluşan kar çekilebilir.</p>
                                        <p>Bu bonusdan maksimum 2500 TL' ye kadar faydalanabilirsiniz.</p>

                                        {/*<Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.ArrowRight />
                                        </a>
                                    </Link>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center ">
                            <div className="col-lg-6 features-details">
                                <div className="features-details-desc">
                                    <div className="blog-post-content">
                                        <p>Tüm bakiyenizin sıfırlanması durumunda, Tüm hafta boyunca kaybettiğiniz ana bakiyenizin %20’ sini tekrar hesabınıza ekliyoruz.</p>
                                        <p>Minimum 100tl kaybınızın olması gerekmektedir.</p>
                                        <p>Bonusunuzu tüm ürün çeşitlerinde kullanabilirsiniz.</p>
                                        <p>Bonusunuzdan faydalanmak için herhangi bir işlem şartı yoktur.</p>
                                        <p>Haftalık kayıp bonusunuzu ise her pazar gecesi 23:59'dan sonra talep edebilirsiniz.</p>
                                        <p>Çekim sırasında, sizlere sağlamış olduğumuz haftalık %20 kayıp bonusu, ana bakiyenizden düşülerek kar ödemeniz yapılır. Yani çekim esnasında sadece bonus düşülür, bonustan oluşan kar çekilebilir.</p>
                                        <p>Bu bonusdan maksimum 2500 TL' ye kadar faydalanabilirsiniz.</p>

                                        {/*<Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.ArrowRight />
                                        </a>
                                    </Link>*/}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 features-details-image">
                                <img
                                    src="/images/blog-image/PROMOSYONSAYFASI-03.png"
                                    className="animate__animated animate__fadeInUp"
                                    alt="image"
                                />
                            </div>
                        </div>
                        {/* Pagination */}
                        {/*<div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link" href="#">Prev</a></li>

                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>

                                        <li className="page-item"><a className="page-link" href="#">2</a></li>

                                        <li className="page-item"><a className="page-link" href="#">3</a></li>

                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>*/}
                    </div>
                </div>
		    </div>

            <Footer />
        </>
    )
}

export default Blog1;
