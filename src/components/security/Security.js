import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { FloatingLabel, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import CloseEye from "../../assets/images/closeEye.png";
import OpenEye from "../../assets/images/openEye.png";
import useAuth from "../../hooks/useAuth";

const Security = () => {
    const { user, dispatch } = useAuth();

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [isVisible, setVisible] = useState(false);
    const [showNew, setShowNew] = useState(false);

    const toggleCurrent = () => {
        setVisible(!isVisible);
    };

    const toggleNew = () => {
        setShowNew(!showNew);
    };



    const handleUpdate = async (e) => {
      
        e.preventDefault();

        dispatch({ type: "UPDATE_START" });

        const updatedUser = {
            userId: user?._id,
            password: newPassword,
        };

        try {
            const { data } = await axios.post("https://global-life-api.onrender.com/api/users/checkPassword", { currentPassword, userId: user?._id });

            if (data) {
                try {
                    const res = await axios.put(`https://global-life-api.onrender.com/api/users/${user?._id}`, updatedUser);
                    dispatch({ type: "UPDATE_SUCCESS", payload: res?.data });
                    toast.success("Successfully Updated");
                } catch (err) {
                    dispatch({ type: "UPDATE_FAILURE", payload: err?.response?.data });
                    toast.error("There is something wrong");
                }
            }

        } catch (err) {
            toast.error("Current password is not correct");
        }
    };

    return (
        <div>
            <div className="border-bottom-gray-1 pb-2">
                <span className="event-yellow bg-pale-goldenrod ff-inter">Last Update {moment(user?.updatedAt).fromNow()}</span>
                <h4 className="fw-normal fs-48 lh-58 text-dark1 my-2 py-12">Login and security</h4>
                <p className="fw-normal ff-inter fs-18 lh-28 ff-inter text-dark2 m-0">Update your password and secure your account</p>
                <hr />
            </div>

            <form onSubmit={handleUpdate}>
                <Row>
                    <FloatingLabel controlId="currentPassword" label="Current Password" className="position-relative">
                        <Form.Control type={!isVisible ? "password" : "text"} value={currentPassword} name="currentPassword" onChange={(e) => setCurrentPassword(e.target.value)} required />
                        <span className="position-absolute eye-icon" onClick={toggleCurrent}>
                            <img src={isVisible ? OpenEye : CloseEye} alt="icon" />
                        </span>
                    </FloatingLabel>

                    <FloatingLabel controlId="newPassword" label="New Password" className="mt-4">
                        <Form.Control type={!showNew ? "password" : "text"} value={newPassword} name="newPassword" onChange={(e) => setNewPassword(e.target.value)} required />
                        <span className="position-absolute eye-icon" onClick={toggleNew}>
                            <img src={showNew ? OpenEye : CloseEye} alt="icon" />
                        </span>
                    </FloatingLabel>
                </Row>

                <button type="submit" className="commonBtn ff-inter bg-green discoverBtn text-uppercase ls-1 d-flex align-items-center justify-content-center text-white fs-12 mt-5">
                    Save Change
                </button>
            </form>
        </div>
    );
};

export default Security;
