import React from 'react';
import Link from 'next/link'

const PricingStyleOne = () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Ayrıcalıklar</h2>
                    <div className="bar"></div>
                    <p>Bu kısımdan üyelik seçeneklerine göz atabilirsiniz.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <h3>Altın Üye</h3>
                            </div>
                            
                            <div className="price">
                                <span>Bedeva</span>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active">Özellik1</li>
                                    <li className="active">Özellik2</li>
                                    <li className="active">Özellik3</li>
                                    <li className="active">Özellik4</li>
                              
                                    <li>Özellik5</li>
                                    <li >Özellik6</li>
                                    <li >Özellik7</li>
                                    <li >Özellik8</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="#">
                                    <a className="btn btn-primary">Planı Seç</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table active-plan">
                            <div className="pricing-header">
                                <h3>Platin Üye</h3>
                            </div>
                            
                            <div className="price">
                                <span><sup>$</sup>35.00 <span>/Mon</span></span>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                     <li className="active">Özellik1</li>
                                    <li className="active">Özellik2</li>
                                    <li className="active">Özellik3</li>
                                    <li className="active">Özellik4</li>
                              
                                    <li className="active">Özellik5</li>
                                    <li className="active" >Özellik6</li>
                                    <li >Özellik7</li>
                                    <li >Özellik8</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="#">
                                    <a className="btn btn-primary">Planı Seç</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <h3>Elmas Üye</h3>
                            </div>
                            
                            <div className="price">
                                <span><sup>$</sup>65.00 <span>/Mon</span></span>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                <li className="active">Özellik1</li>
                                    <li className="active">Özellik2</li>
                                    <li className="active">Özellik3</li>
                                    <li className="active">Özellik4</li>
                              
                                    <li className="active">Özellik5</li>
                                    <li  className="active">Özellik6</li>
                                    <li  className="active">Özellik7</li>
                                    <li  className="active">Özellik8</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="#">
                                    <a className="btn btn-primary">Planı Seç</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
    );
    
}

export default PricingStyleOne;
