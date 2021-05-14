import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Login = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Giriş Yap" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <a><img src="/images/logo.png" /></a>
                            </Link>
                            <p>Henüz hesabın yok mu? <Link href="/sign-up">Kayıt Ol</Link></p>
                        </div>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Şifre</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="mb-3">
                                <p><Link href="/forgot-password"><a>Şifremi Unuttum</a></Link></p>
                            </div>

                            <button type="submit" className="btn btn-primary">Giriş Yap</button>
                        </form>

                        <div className="foot">
                            <p>ya da iletişime geç</p>
                            <ul>
                                <li>
                                    <a href="#" target="_blank">
                                        <Icon.Mail />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Login;
