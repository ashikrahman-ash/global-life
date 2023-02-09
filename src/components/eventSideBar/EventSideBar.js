/* eslint-disable jsx-a11y/iframe-has-title */
import moment from "moment/moment";
import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/images/ArrowRight.svg";
import ClockCircle from "../../assets/images/ClockCircle.svg";
import Follower1 from "../../assets/images/follower1.png";
import location from "../../assets/images/location.svg";
import "./eventSideBar.scss";

const EventSideBar = ({ singleDetails }) => {

    // const formatedDate = moment(singleDetails?.startDate).fromNow();
    
  return (
      <div>
          <div className="bg-white p-4 mb-4">
              <div>
                  <div className="d-flex align-items-start gap-3 mb-4">
                      <img src={ClockCircle} className="img-fluid" alt="clock circle" />
                      <div>
                          <h4 className="fs-6 fw-bold text-clr-dark-1">Date and time</h4>
                          <p className=" text-dark2 fs-14 ff-inter lh-22">
                              {moment(singleDetails?.startDate).format("MMM Do YY")} at {singleDetails?.startTime} WEST
                          </p>
                      </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                      <img src={location} className="img-fluid" alt="clock circle" />
                      <div>
                          <h4 className="fs-6 fw-bold text-clr-dark-1">Location</h4>
                          <p className=" text-dark2 fs-14 ff-inter lh-22">{singleDetails?.streetAddress}</p>
                          <Link className="text-clr-egyptian-green fs-12 fw-semiBold ls-1 ff-inter text-decoration-none" rel="noreferrer">
                              View Map
                          </Link>
                      </div>
                  </div>

                  <div className="mapouter mt-5">
                      <div className="gmap_canvas">
                          <iframe
                              width="100%"
                              height="120"
                              id="gmap_canvas"
                              src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                          ></iframe>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bg-white p-4 mb-4">
              <div className="follower">
                  <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <p className="fs-18 fw-semiBold ff-inter lh-22 mb-0">Followers (480)</p>
                      <div>
                          <Link className="text-clr-egyptian-green fs-12 fw-semiBold text-uppercase ff-inter ls-1 text-decoration-none">
                              See all
                              <span>
                                  <img src={ArrowRight} alt="icon" />
                              </span>
                          </Link>
                      </div>
                  </div>
                  <div className="followerImg mt-5 d-flex justify-content-center gap-2 align-items-center flex-wrap">
                      <img src={Follower1} className="img-fluid mb-3" alt="follower" />
                      <img src={Follower1} className="img-fluid mb-3" alt="follower" />
                      <img src={Follower1} className="img-fluid mb-3" alt="follower" />
                      <img src={Follower1} className="img-fluid mb-3" alt="follower" />
                      <img src={Follower1} className="img-fluid mb-3" alt="follower" />
                      <img src={Follower1} className="img-fluid mb-3" alt="follower" />
                      <img src={Follower1} className="img-fluid mb-3" alt="follower" />
                      <img src={Follower1} className="img-fluid mb-3" alt="follower" />
                  </div>
              </div>
          </div>
          <div className="wedged-area p-4 mb-4 ff-inter bg-white">
              <div className="d-flex align-items-center justify-content-between mb-4">
                  <h4 className="fs-18 text-dark1 fw-semiBold mb-0 ">Related Tags</h4>
              </div>
              <div className="category-tags">
                  <Link className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">Art and Culture</Link>
                  <Link className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">Career and Business</Link>
                  <Link className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">Community and environment</Link>
                  <Link className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">Health and Wellbeing</Link>
                  <Link className="single-category fs-12 lh-15 text-uppercase ls-1 text-dark3 fw-semiBold d-inline-block">Hobbies & Passion</Link>
              </div>
          </div>
      </div>
  );
};

export default EventSideBar;
