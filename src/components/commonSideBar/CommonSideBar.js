import React from 'react';
import { Link } from 'react-router-dom';
import './commonSideBar.scss';

const CommonSideBar = () => {
    return (
        <div>
            <div className="wedged-area p-4 mb-4">
                <div className="calendar ff-inter">
                    <h4 className="fs-18 lh-22"> August 2022 </h4>
                </div>
            </div>

            <div className="wedged-area p-4 mb-4 ff-inter">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h4 className="fs-18 text-dark1 fw-semiBold mb-0 "> Your interests </h4>
                    <Link  className="ff-inter readMoreCommon d-flex align-items-center justify-content-start text-green text-decoration-none py-1 fs-12 lh-22 fw-semiBold text-uppercase ls-1">
                        See all
                        <span className="ps-1 mb-1">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.2163 7.13097L4.61279 1.97326C4.59554 1.95967 4.5748 1.95123 4.55296 1.9489C4.53113 1.94657 4.50908 1.95045 4.48934 1.96008C4.46961 1.96972 4.45299 1.98473 4.44141 2.00338C4.42982 2.02204 4.42373 2.04358 4.42383 2.06554V3.19787C4.42383 3.26965 4.45752 3.33849 4.51318 3.38244L9.78661 7.50011L4.51318 11.6178C4.45606 11.6617 4.42383 11.7306 4.42383 11.8024V12.9347C4.42383 13.0328 4.53662 13.087 4.61279 13.027L11.2163 7.86926C11.2724 7.82548 11.3178 7.76947 11.3491 7.70551C11.3803 7.64154 11.3965 7.5713 11.3965 7.50011C11.3965 7.42893 11.3803 7.35869 11.3491 7.29472C11.3178 7.23076 11.2724 7.17475 11.2163 7.13097Z"
                                    fill="#0A8270"
                                />
                            </svg>
                        </span>
                    </Link>
                </div>
                <div className="category-tags">
                    <Link  className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Art and Culture
                    </Link>
                    <Link  className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Career and Business
                    </Link>
                    <Link  className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Community and environment
                    </Link>
                    <Link  className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Dancing
                    </Link>
                    <Link  className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Games
                    </Link>
                    <Link  className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Health and Wellbeing
                    </Link>
                    <Link  className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Hobbies & Passion
                    </Link>
                    <Link  className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Identity and Language
                    </Link>
                    <Link  className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Movement and Politics
                    </Link>
                    <Link  className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Music
                    </Link>
                    <Link  className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Parents and Family
                    </Link>
                    <Link  className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">
                        Pets and Animals
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CommonSideBar;