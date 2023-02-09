import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Eye from "../../assets/images/Eye.svg";
import Follower1 from "../../assets/images/reader1.png";
import Follower2 from "../../assets/images/reader2.png";
import Follower3 from "../../assets/images/reader3.png";
import Follower4 from "../../assets/images/reader4.png";
import Follower5 from "../../assets/images/reader6.png";
import Star from "../../assets/images/Star6.svg";
import useAuth from "../../hooks/useAuth";
import useFetch from "../../hooks/useFetch";
import "./eventDetailsHeroArea.scss";

const EventDetailsHeroArea = ({ singleDetails, avgRating, totalReviews }) => {
  
  const [follow, setFollow] = useState(0);
  const [isFollowed, setIsFollowed] = useState(false);

//   const [followUser, setFollowUser] = useState(0);
  const [isFollowedUser, setIsFollowedUser] = useState(false);

  const { user } = useAuth();

  const { data } = useFetch(`https://global-life-api.onrender.com/api/users/${user?._id}`);


  // const PF = "https://global-life-api.onrender.com/images/"; 

  useEffect(() => {
    setIsFollowed(singleDetails?.followers?.includes(user?._id));
    setFollow(singleDetails?.followers?.length);
  }, [user?._id, singleDetails?.followers]);


  useEffect(() => {
      setIsFollowedUser(data?.followings?.includes(singleDetails?.userId));
      //   setFollowUser(user?.followers?.length);
  }, [user?._id, data?.followings, singleDetails?.userId]);



  const followHandler = () => {

    if (user?._id) {
        if (user?._id !== singleDetails?.userId) {
            try {
                axios.put(`https://global-life-api.onrender.com/api/events/allevents/${singleDetails?._id}/follow`, { userId: user?._id });

                setFollow(isFollowed ? follow - 1 : follow + 1);
                setIsFollowed(!isFollowed);
            } catch (err) {
                console.log(err);
            }
        } else {
            toast.error("You can not follow your post");
        }
    } else {
        toast.error("You have to login for follow this event");
    }
  };

  const handleUserFollow = () => {
      if (user?._id) {
        if (user?._id !== singleDetails?.userId) {
            try {
                axios.put(`https://global-life-api.onrender.com/api/users/${singleDetails?.userId}/follow`, { userId: user?._id });

                //   setFollowUser(isFollowedUser ? followUser - 1 : followUser + 1);
                setIsFollowedUser(!isFollowedUser);
            } catch (err) {
                console.log(err);
            }
        }
        else{
            toast.error("You can not follow yourself");
        }
          
      } else {
          toast.error("You have to login for follow the User");
      }
  };

  return (
      <div>
          <div className="event-details-banner">
              <div className="container">
                  <div className="event-details align-items-center py-3">
                      <div className="event-details-left ">
                          <div className="d-flex gap-2 mb-3">
                              <div className="event-yellow bg-pale-goldenrod d-flex align-items-center justify-content-center">
                                  <p className="mb-0 ls-1 text-dark1 px-1 fw-semiBold ff-inter fs-12">{singleDetails?.postType}</p>
                              </div>
                              <div className="event-gray bg-gray-2 d-flex align-items-center justify-content-center">
                                  <p className=" text-dark2 fw-semiBold px-1 fs-12 mb-0 ff-inter ls-1">{singleDetails?.tags?.map((i) => i)}</p>
                              </div>
                          </div>
                          <div className="event-heading">
                              <h2 className="fs-48 lh-58 text-dark1 mb-4">{singleDetails?.title}</h2>
                          </div>
                          <div className="event-information">
                              <div className="d-flex align-items-center gap-2">
                                  <div className=" d-flex align-items-center gap-2">
                                      <div className="d-flex align-items-center gap-1">
                                          <p className="mb-0 text-dark2 fs-14 fw-medium ff-inter">Organiser:</p>
                                          <Link to={`/userdetails/${singleDetails?.userId} `} className="text-dark1 fs-14 fw-medium ff-inter text-decoration-underline">
                                              {singleDetails?.username}
                                          </Link>
                                      </div>
                                      <div className="follow-btn d-flex align-items-center justify-content-center">
                                          <button className="border-0 ff-inter text-clr-egyptian-green  p-1 px-2 bg-egyptian-green-light mb-0 ls-1" onClick={handleUserFollow}>
                                              {isFollowedUser ? "Unfollow" : "Follow"}
                                          </button>
                                      </div>
                                      <div className="line"></div>
                                  </div>
                                  <div className="view d-flex align-items-center">
                                      <p className=" text-dark2 fs-14 fw-medium ff-inter mb-0">€{singleDetails?.cost} Per Person</p>
                                  </div>
                                  <div className="line"></div>
                                  <div className="review d-flex align-items-center gap-2">
                                      <img src={Star} className="img-fluid" alt="star" />
                                      <p className=" text-dark2 fs-14 fw-medium ff-inter mb-0">
                                          {avgRating.toFixed(1)}/5 ({totalReviews} reviews)
                                      </p>
                                  </div>
                                  <div className="line"></div>
                                  <div className="review d-flex align-items-center gap-3">
                                      <div className="card__content-body-users">
                                          <div className="image">
                                              <img src={Follower1} className="img-fluid" alt="reader" />
                                              <img src={Follower2} className="img-fluid" alt="reader" />
                                              <img src={Follower3} className="img-fluid" alt="reader" />
                                              <img src={Follower4} className="img-fluid" alt="reader" />
                                              <img src={Follower5} className="img-fluid" alt="reader" />
                                          </div>
                                      </div>

                                      <p className=" text-dark2 fs-14 fw-medium ff-inter mb-0">{follow} Followers</p>
                                  </div>
                                  <div className="line"></div>
                                  <div className="view d-flex align-items-center gap-2">
                                      <img src={Eye} className="img-fluid" alt="eye" />
                                      <p className=" text-dark2 fs-14 fw-medium ff-inter mb-0">{singleDetails?.views}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="event-details-right ms-auto ">
                          <div>
                              <button
                                  className="btn-green ls-1 fs-12 text-uppercase fw-semiBold text-white d-flex justify-content-center mb-3 align-items-center border-0 bg-green ff-inter"
                                  type="button"
                                  onClick={followHandler}
                              >
                                  {!isFollowed ? "Follow This Event" : "Unollow This Event"}
                              </button>
                              <button className="single-border-btn ls-1 fs-12 text-uppercase d-flex align-items-center fw-semiBold ff-inter justify-content-center mb-3" type="button">
                                  Share this event
                              </button>
                          </div>
                      </div>
                  </div>

                  <div className="blog-details-wrapper mt-5 d-flex align-items-center justify-content-center gap-3">
                      <div className="blog-details-img">
                          <img src={singleDetails?.photos} className="img-fluid" alt="blog-details" />
                      </div>
                      <div className="blog-details-img">
                          <img src={singleDetails?.photos} className="img-fluid" alt="blog-details" />
                      </div>
                      <div className="blog-details-img">
                          <img src={singleDetails?.photos} className="img-fluid" alt="blog-details" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default EventDetailsHeroArea;
