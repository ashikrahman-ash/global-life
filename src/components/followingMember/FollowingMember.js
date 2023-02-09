import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Avator from '../../assets/images/demo-profile-avatar.png';
import useAuth from '../../hooks/useAuth';
import './followingMember.scss';


const FollowingMember = ({ followingMemberData, loading, error }) => {

    const {user} = useAuth()

    const MemberFollowBtn = ({ member }) => {

        const [isFollowedUser, setIsFollowedUser] = useState(false);

        useEffect(() => {
            setIsFollowedUser(member?.followers?.includes(user?._id));
        }, [member?.followers]);

        const handleUserFollow = () => {
            if (user?._id) {
                if (user?._id !== member?._id) {
                    try {
                        axios.put(`https://global-life-api.onrender.com/api/users/${member?._id}/follow`, { userId: user?._id });

                        setIsFollowedUser(!isFollowedUser);
                    } catch (err) {
                        console.log(err);
                    }
                } else {
                    toast.error("You can not follow yourself");
                }
            } else {
                toast.error("You have to login for follow the User");
            }
        };

        return <button onClick={handleUserFollow}>{isFollowedUser ? "Unfollow" : "Follow"}</button>;
    };


    return (
        <>
            <div className="d-flex justify-content-center align-items-center h-50">{loading && <Spinner animation="grow" variant="warning" />}</div>
            {!loading &&
                !error &&
                followingMemberData.map((member) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={member?._id}>
                        <div className="following-member-card">
                            <img src={member?.profilePic ? member?.profilePic : Avator} alt="Profile-pic" width={51} height={51} className="rounded-circle" />

                            <Link to={`/userdetails/${member?._id}`} className="text-decoration-none text-dark1 ff-inter">
                                {member?.name}
                            </Link>

                            <MemberFollowBtn member={member} />
                        </div>
                    </div>
                ))}
        </>
    );
};

export default FollowingMember;