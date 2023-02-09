import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

const FollowingItem = ({ data, loading, error }) => {

     const { user } = useAuth();

     const ItemFollowBtn = ({ item }) => {

         const [isFollowed, setIsFollowed] = useState(false);

         useEffect(() => {
             setIsFollowed(item?.followers?.includes(user?._id));
         }, [item?.followers]);

         const handleFollow = () => {
             if (user?._id) {
                 if (user?._id !== item?.userId) {
                     try {
                         axios.put(`https://global-life-api.onrender.com/api/events/allevents/${item?._id}/follow`, { userId: user?._id });

                         setIsFollowed(!isFollowed);
                     } catch (err) {
                         console.log(err);
                     }
                 } else {
                     toast.error("You can not follow or unfollow your post");
                 }
             } else {
                 toast.error("You have to login for follow this event");
             }
         };

         return (
             <button className="card-footer-btn" onClick={handleFollow}>
                 {isFollowed ? "Unfollow" : "Follow"}
             </button>
         );
     };


    return (
        <div>
            <div className="d-flex justify-content-center align-items-center h-50">{loading && <Spinner animation="grow" variant="warning" />}</div>
            {!loading &&
                !error &&
                data?.map((i) => (
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

                        <ItemFollowBtn item={i}/>
                    </div>
                ))}
        </div>
    );
};

export default FollowingItem;