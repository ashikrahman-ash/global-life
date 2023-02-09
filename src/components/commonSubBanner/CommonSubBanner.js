import React from 'react';
import './commonSubBanner.scss';

const CommonSubBanner = () => {
    return (
        <section className="commonBanner bg-gray3 ">
            <div className="container">
                <div className="banner-grid-container text-center">
                    <div>
                        <h2 className="m-0 py-4 text-center fs-36 fw-medium text-dark1">What's Happening Next?</h2>
                        <p className="fs-18 text-dark2 ff-inter lh-28 pt-4 mb-5">Join or create groups/events/experiences for the members</p>
                        <div className="searchBtnWrapper">
                            <input type="text" className="searchControl ff-inter w-100" placeholder="Find what’s happening, recomendation and more... " />
                            <button className=" text-uppercase searchBtn fs-12 fw-semiBold ff-inter border-0">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommonSubBanner;