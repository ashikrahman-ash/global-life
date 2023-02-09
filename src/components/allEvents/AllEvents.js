import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import CardLoader from "../../utils/CardLoader";
import CommonFilterHeader from "../commonFilterHeader/CommonFilterHeader";
import CommonSideBar from "../commonSideBar/CommonSideBar";
import CommonSubBanner from "../commonSubBanner/CommonSubBanner";
import HappingNext from "../happingNext/HappingNext";

const AllEvents = () => {
    const [limit, setLimit] = useState(12);

    const [selectedCategory, setSelectedCategory] = useState();

    const [selectedType, setSelectedType] = useState();

    const { data, loading } = useFetch(
        `https://global-life-api.onrender.com/api/events/allevents?${selectedType && "postType"}=${selectedType && selectedType}&${selectedCategory && "category"}=${selectedCategory && selectedCategory}&limit=${limit}&sort=createdAt&asc=-1`
    );

    const handleLoadMore = () => {
        setLimit((pre) => pre + 4);
    };


    const filterByType = (e) => {
        setSelectedType(e.target.value);
    };

    const filterByCategory = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleReset = () => {
        setSelectedType('')
        setSelectedCategory('')
    }

    return (
        <div>
            <CommonSubBanner />
            <section className="event-content-wrapper section-padding-72">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <CommonSideBar />
                        </div>
                        <div className="col-xl-9">
                            <CommonFilterHeader filterByType={filterByType} filterByCategory={filterByCategory} handleReset={handleReset} />
                            <div className="events-post-area">
                                <div className="happeningNextWrapper mt-4">
                                    <div className="row">
                                        {loading && (
                                            <>
                                                <div className="col-sm-6 col-md-4">
                                                    <CardLoader />
                                                </div>
                                                <div className="col-sm-6 col-md-4">
                                                    <CardLoader />
                                                </div>
                                                <div className="col-sm-6 col-md-4">
                                                    <CardLoader />
                                                </div>
                                            </>
                                        )}

                                        {!loading && data?.events?.map((event) => <HappingNext key={event?._id} event={event} />)}

                                        {data?.events?.length === 0 && <p className="text-clr-dark-4 ff-inter text-center">No Events Available</p>}

                                        <div className="d-flex justify-content-center mt-5">
                                            {!(data?.limit > data?.events?.length) && (
                                                <button
                                                    onClick={handleLoadMore}
                                                    className="commonBtn ff-inter bg-green discoverBtn text-uppercase ls-1 d-flex align-items-center justify-content-center text-white fs-12"
                                                >
                                                    <span>Load More</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllEvents;
