import React, { useState } from "react";
import bannerImg from "../../assets/images/banner.png";
import Banner from "../../components/Banner/Banner";
import HappingNext from "../../components/happingNext/HappingNext";
import useFetch from "../../hooks/useFetch";
import CardLoader from "../../utils/CardLoader";

const HomePage = () => {

    
    const [limit, setLimit] = useState(4);

    const { data, loading } = useFetch(`https://global-life-api.onrender.com/api/events/allevents?limit=${limit}&sort=createdAt&asc=-1`);

    const handleLoadMore = () => {
        setLimit((pre) => pre + 4);
    };

    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

    // const [searchLoading, setSearchLoading] = useState(false)

    const { data: searchData, loading: searchLoading } = useFetch(`https://global-life-api.onrender.com/api/events/search/?q=${query}`);

    const handleSearch = () => {
        
        setResult(searchData);

    };

    return (
        <div>
            <Banner
                bannerBg={bannerImg}
                bannerTitle={"Shared local knowledge for relocated families in Portugal."}
                bannerIntro={"Global Life is the one stop shop for expats to find all the information they need to make their new move more enjoyable, easier and less hassle free."}
                inputText={"Find what’s happening, recomendation and more... "}
                setQuery={setQuery}
                query={query}
                handleSearch={handleSearch}
            />

            {/* <div className="p-5">{data[1]?.desc.replace(/(<([^>]+)>)/gi, "")}</div> (Text Editor) */}

            <section className="heppeningNext sectionPadding">
                <div className="container">
                    <div className="commonTitle">
                        <h2 className="m-0 py-4 text-center fs-36 fw-medium text-dark1">What's Happening Next?</h2>
                    </div>

                    <div className="happeningNextWrapper mt-5">
                        <div className="row">
                            {loading && (
                                <>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <CardLoader />
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <CardLoader />
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <CardLoader />
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <CardLoader />
                                    </div>
                                </>
                            )}

                            {searchLoading && query && (
                                <>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <CardLoader />
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <CardLoader />
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <CardLoader />
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <CardLoader />
                                    </div>
                                </>
                            )}

                            {query && result?.map((event) => <HappingNext key={event?._id} event={event} />)}

                            {!loading && !query && data?.events?.map((event) => <HappingNext key={event?._id} event={event} />)}

                            {data?.events?.length === 0 && <p className="text-clr-dark-4 ff-inter text-center">No Events Available</p>}

                            {result?.length === 0 && query && <p className="text-clr-dark-4 ff-inter text-center">No Search Result Found</p>}

                            <div className="d-flex justify-content-center mt-5">
                                {!(data?.limit > data?.events?.length) && (
                                    <button
                                        onClick={handleLoadMore}
                                        className="commonBtn ff-inter bg-green discoverBtn text-uppercase ls-1 d-flex align-items-center justify-content-center text-white fs-12"
                                    >
                                        <span>Discover More</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
