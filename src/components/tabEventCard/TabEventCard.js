import moment from "moment";
import React, { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteModal from "../deleteModal/DeleteModal";
import StepFormModal from "../stepFormModal/StepFormModal";
import "./tabEventCard.scss";

const TabEventCard = ({ loadedData, loading, error, handleLoadMore, reFetch }) => {

    //   const PF = "https://global-life-api.onrender.com/images/";

    const [data, setData] = useState({});

    useEffect(() => {
        setData(loadedData);
    }, [loadedData]);

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center h-50">{loading && <Spinner animation="grow" variant="warning" />}</div>
            {!loading &&
                !error &&
                data?.myEvents?.map((i) => (
                    <div className="tabEventCard mb-4" key={i?.createdAt}>
                        <div className="content">
                            <div className="info">
                                <p className={`event-category ${i?.postType === "Experience" ? "bg-sky-blue" : "bg-lemon-yellow"}`}>{i?.postType}</p>
                                <p className="status">
                                    <span>€{i?.cost}</span> |{" "}
                                    <span>
                                        {moment(i?.startDate).add(0, "days").calendar().slice(0, -12)} at {i?.startTime}
                                    </span>{" "}
                                    | <span>{i?.followers?.length} Followers</span>
                                </p>
                                <Link to={`/eventdetails/${i?._id}`} className="title text-decoration-none">
                                    {i?.title}
                                </Link>
                                <p className="address mt-2">{i?.streetAddress}</p>
                            </div>
                            <div className="img-box">
                                <img className="img-fluid" src={i?.photos} alt="img" />
                            </div>
                        </div>

                        <div className="d-flex">
                            <StepFormModal reFetch={reFetch} currentData={i} />

                            <DeleteModal reFetch={reFetch} currentData={i} loading={loading} />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TabEventCard;
