import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const BlogCard = () => {
    return (
        <div className="blog-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Our Recent Story</h2>
                    <div className="bar"></div>
{/*
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
*/}                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post-box">
                            <div className="entry-thumbnail">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog-image/blog9.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="entry-post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Admin</a>
                                            </Link>
                                        </li>
                                        <li>August 15, 2021</li>
                                    </ul>
                                </div>

                                <h3>
                                    <Link href="/blog-details">
                                        <a>Making Peace With The Feast Or Famine Of Freelancing</a>
                                    </Link>
                                </h3>
{/*
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
*/}

                                <Link href="/blog-details">
                                    <a className="learn-more-btn">Read Story <Icon.Plus /></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post-box">
                            <div className="entry-thumbnail">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog-image/blog10.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="entry-post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Admin</a>
                                            </Link>
                                        </li>
                                        <li>August 18, 2019</li>
                                    </ul>
                                </div>

                                <h3>
                                    <Link href="/blog-details">
                                        <a>I Used The Web For A Day On A 50 MB Budget</a>
                                    </Link>
                                </h3>
{/*
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
*/}

                                <Link href="/blog-details">
                                    <a className="learn-more-btn">Read Story <Icon.Plus /></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div className="single-blog-post-box">
                            <div className="entry-thumbnail">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog-image/blog11.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="entry-post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Admin</a>
                                            </Link>
                                        </li>
                                        <li>August 15, 2019</li>
                                    </ul>
                                </div>

                                <h3>
                                    <Link href="/blog-details">
                                        <a>Here are the 5 most telling signs of micromanagement</a>
                                    </Link>
                                </h3>
{/*
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
*/}

                                <Link href="/blog-details">
                                    <a className="learn-more-btn">Read Story <Icon.Plus /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
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
    );
}

export default BlogCard;
