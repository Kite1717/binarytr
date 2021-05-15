import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import Link from 'next/link';
import * as Icon from 'react-feather';
 
import TwoOptBanner from "@/components/ITStartup/TwoOptBanner";
const Services3 = () => {
    return (
        <>
            <Navbar />

            <TwoOptBanner/>

           
            <div className="solutions-area ">
            <div className="video-container">
                <video
                  loop
                  playsInline=""
                  autoPlay
                  muted
                  src="https://firebasestorage.googleapis.com/v0/b/binary-tr.appspot.com/o/two-opt.mp4?alt=media&token=d7ad9566-70dc-44d2-8c86-623d1a3dd07b"
                ></video>
              </div>

            <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="ml-about-img">
                                <img src="/images/banner-image/prod-two/two-opt2.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="ml-about-content">
                                <h2>İkili Opsiyon</h2>
                                <div className="bar"></div>

                                <p><strong>İkili opsiyon</strong>, seçmiş olduğunuz ürünler (hisse senedi,doviz,endeks,kripto vb...) üzerinde
                                    belirlediğiniz süre içinde iki yönlü işlem yapma yetkisidir. Sadece iki unsura dayanmaktadır.
                                </p>

                                <p>"Yukarı" ya da "Aşağı". Forex ticaretinde olduğu gibi karışık terimler ya da yüksek riskler bulunmamaktadır.İkili opsiyon
                                    ticaretinin kendine özgü bir çok avantajı bulunmaktadır. Karışık finansal kavramlar ile yüksek risklerden hoşlanmıyor
                                    ve yatırımlarınızdan kısa sürede gelir elde etmek istiyorsanız, <strong>ikili opsiyonlar</strong> tam size göre demektir.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            <div className="container">
                <div className="section-title">
                    <h2><img src="/images/logo.png" alt="logo" /> Olarak Sizlere Sunduğumuz İkili Opsiyon Avantajları</h2>
                    <div className="bar"></div>
                </div>
            </div>


                <div className="container justify-content-center">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-landscape"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Hızlı ve online kayıt olabilme imkanı</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-bar-chart-alt"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Demo hesap ile piyasaları takip edip canlı hesaba geçmeden önce tecrübe kazanma imkanı</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                             
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-devices"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Gelişmiş işlem platformları</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-chalkboard"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Kullanım kolaylığı</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-landscape"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Promosyonlar ile yüksek marj desteği</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-bar-chart-alt"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>%90 a varan kazanç oranları</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-devices"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Anında para yatırma ve çekme imkanı</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-chalkboard"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Farklı para yatırma ve farklı para çekme seçenekleri</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-chalkboard"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>50’den fazla Parite,Metaller,İndeksler ve Coinlerde işlem yapma imkanı</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-chalkboard"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Hızlı Canlı Destek ve Türkçe konuşan danışmanlar</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-chalkboard"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>İndikatör ve Osilatörlerde kendi teknik analizini oluşturabilme imkanı</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>



                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-chalkboard"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Özelleştirilebilir ara yüzünü kendi isteğinize göre oluşturabilme imkanı</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>



                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-chalkboard"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Kaybedebileceğiniz miktarın maksimum yatırımınız kadar olması</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>



                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="solutions-box">
                                <div className="icon">
                                    <i className="bx bx-chalkboard"></i>
                                    <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>1 dakika kadar kısa sürede işleminizin sonuçlanması</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>


                        

                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape6 rotateme">
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

export default Services3;