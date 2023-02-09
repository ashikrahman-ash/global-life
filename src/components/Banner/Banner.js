import React from 'react';
import './banner.scss';

const Banner = ({ bannerBg, bannerTitle, bannerIntro, inputText, setQuery, query, handleSearch }) => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-grid-container">
                    <div className="">
                        <div className="banner-content text-center ">
                            <h1 className="fs-48 fw-medium text-dark1 lh-58">{bannerTitle}</h1>
                            <p className="fs-18 text-dark2 ff-inter lh-28 pt-4 mb-5">{bannerIntro}</p>

                            <div className="searchBtnWrapper mx-auto">
                                <input type="text" className="searchControl ff-inter" placeholder={inputText} value={query} onChange={(e) => setQuery(e.target.value.toLowerCase())} />
                                <button className=" text-uppercase searchBtn fs-12 fw-semiBold ff-inter border-0" onClick={handleSearch}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="banner-img"> </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner