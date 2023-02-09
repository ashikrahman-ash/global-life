import axios from "axios";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import AddPiAvatar from "../../assets/images/addpiavatar.svg";
import PiDelete from "../../assets/images/delete.svg";
import PiPencil from "../../assets/images/pencil.svg";
import Avator from '../../assets/images/pi-avatar.png';
import app from "../../firebase";
import useAuth from "../../hooks/useAuth";
import "./ProfileInformation.scss";

const ProfileInformation = ({ handleShow }) => {

    const { user, dispatch } = useAuth();

    const [imgUrl, setImgUrl] = useState(user?.profilePic);

    const [uploadProgress, setUploadProgress] = useState(0);

    const [name, setName] = useState(user?.name);
    const [phone, setPhone] = useState(user?.phone);
    const [email, setEmail] = useState(user?.email);
    const [location, setLocation] = useState(user?.location);
    const [bio, setBio] = useState(user?.bio);
    const [fb, setFb] = useState(user?.fb);
    const [insta, setInsta] = useState(user?.insta);
    const [linkedin, setLinkedin] = useState(user?.linkedin);
    const [tweet, setTweet] = useState(user?.tweet);
    const [lang, setLang] = useState(user?.lang);
    const [maritalStatus, setMaritalStatus] = useState(user?.maritalStatus);

    const [uploadImg, setUploadImg] = useState("");

    // For Getting Multiple Checkbox value
    const handleCheck = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setLang((prevValue) => [...prevValue, value]);
        } else {
            setLang((prevValue) => {
                return [...prevValue.filter((item) => item !== value)];
            });
        }
    };

    //  Firebase File Upload

    const uploadFile = (file) => {
        const storage = getStorage(app);
        const fileName = Date.now() + "_" + uploadImg.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(Math.round(progress));
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            },
            (error) => {},
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL);
                });
            }
        );
    };

    useEffect(() => {
        uploadImg && uploadFile(uploadImg);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadImg]);

    const handleUploadProfilePic = async () => {
        if (uploadImg) {
            try {
                await axios.post("https://global-life-api.onrender.com/api/uploads", uploadImg);
            } catch (err) {
                console.log(err);
            }
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        dispatch({ type: "UPDATE_START" });

        const updatedUser = {
            userId: user?._id,
            name,
            phone,
            email,
            location,
            bio,
            fb,
            insta,
            linkedin,
            tweet,
            lang,
            maritalStatus,
            profilePic: imgUrl,
        };

        try {
            const res = await axios.put(`https://global-life-api.onrender.com/api/users/${user?._id}`, updatedUser); 

            dispatch({ type: "UPDATE_SUCCESS", payload: res?.data });

            toast.success("Successfully Updated");

            handleShow()
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE", payload: err?.response?.data });

            toast.error("There is something wrong");
        }
    };

    return (
        <div className="profileInformation">
            {/* PI Header /- START */}
            <div className="border-bottom-gray-1 pb-2">
                <span className="event-yellow bg-pale-goldenrod ff-inter">Last Update {moment(user?.updatedAt).fromNow()}</span>
                <h4 className="fw-normal fs-48 lh-58 text-dark1 my-2 py-12">Profile information</h4>
                <p className="fw-normal ff-inter fs-18 lh-28 ff-inter text-dark2 m-0">Provide personal details and how we can reach you</p>
                <hr />
            </div>
            {/* PI Header /- END */}

            {/* PI Avatar /- Start */}
            <div className="pi-header">
                <div className="pi-section-header border-bottom-gray-1 pb-2">
                    <h5 className="fw-bold fs-4 lh-34 text-drak1 m-0">Avatar</h5>
                    <p className="fw-normal fs-5 lh-26 text-dark3 ff-inter m-0">Provide personal details and how we can reach you</p>
                </div>

                <div className="pi-section-avatar mt-3">
                    <div className="text-center">
                        {/* <img src={PiAvatar} alt="avatar" /> */}
                        {uploadProgress > 0 && (
                            <p className="ff-inter text-clr-egyptian-green fw-bold">
                                Uploading <span className="text-clr-egyptian-green">{uploadProgress}%</span>
                            </p>
                        )}

                        <div className="pi-image">
                            <label className="label">
                                <input
                                    type="file"
                                    name="profilePic"
                                    accept="image/*"
                                    placeholder="Upload Image"
                                    onChange={(e) => setUploadImg(e.target.files[0])}
                                    formEncType="multipart/form-data"
                                    required
                                />
                                <figure className="pi-avatar-figure">
                                    <img src={imgUrl ? imgUrl : user?.profilePic ? user?.profilePic : Avator} className="pi-avatar" alt="avatar" />
                                    <figcaption className="pi-avatar-figcaption" onClick={handleUploadProfilePic}>
                                        <img src={AddPiAvatar} alt="img" />
                                    </figcaption>
                                </figure>
                            </label>
                        </div>
                    </div>
                    <div className="pi-avatar-btn d-flex gap-4 justify-content-center my-2">
                        <div className="adujst-btn">
                            <button type="button" className="bg-transparent border-0 d-flex gap-2">
                                <img className="img-fluid" src={PiPencil} alt="icon" />
                                <span className="text-green text-uppercase fw-semibold fs-12 lh-15 ff-inter">Adjust</span>
                            </button>
                        </div>
                        <div className="remove-btn">
                            <button type="button" className="bg-transparent border-0 d-flex gap-2">
                                <img className="img-fluid" src={PiDelete} alt="icon" />
                                <span className="text-green text-uppercase fw-semibold fs-12 lh-15 ff-inter">Delete</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h4 className="fs-24 fw-bold text-dark1">Your Details</h4>
                    <p className="text-dark3 ff-inter">Provide personal details and how we can reach you</p>
                    <hr />
                </div>

                <form onSubmit={handleUpdate}>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="name" label="Name">
                                <Form.Control type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="telephone" label="Telephone">
                                <Form.Control type="phone" value={phone} name="telephone" onChange={(e) => setPhone(e.target.value)} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="email" label="Email">
                                <Form.Control type="email" value={email} name="naemailme" onChange={(e) => setEmail(e.target.value)} />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="location" label="Your Location">
                                <Form.Control type="text" value={location} name="location" onChange={(e) => setLocation(e.target.value)} />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <div className="mt-5">
                        <h4 className="fw-bold text-dark1">Bio</h4>
                        <p className="text-dark3 ff-inter">Write a little bit about yourself here</p>
                        <hr />
                    </div>

                    <FloatingLabel controlId="bio" label="Bio">
                        <Form.Control type="textarea" value={bio} name="bio" onChange={(e) => setBio(e.target.value)} />
                    </FloatingLabel>

                    <div className="mt-5">
                        <h4 className="fw-bold text-dark1">Social Media</h4>
                        <p className="text-dark3 ff-inter">Any added social media links will appear on your profile page</p>
                        <hr />
                    </div>

                    <Row>
                        <Col>
                            <FloatingLabel controlId="facebook" label="Facebook">
                                <Form.Control type="text" value={fb} name="facebook" onChange={(e) => setFb(e.target.value)} />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="tweeter" label="Tweeter">
                                <Form.Control type="text" value={tweet} name="tweeter" onChange={(e) => setTweet(e.target.value)} />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FloatingLabel controlId="instagram" label="Instagram">
                                <Form.Control type="text" value={insta} name="instagram" onChange={(e) => setInsta(e.target.value)} />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="linkedIn" label="LinkedIn">
                                <Form.Control type="text" value={linkedin} name="linkedIn" onChange={(e) => setLinkedin(e.target.value)} />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <div className="mt-5 mb-3">
                        <h4 className="fw-bold text-dark1">Language</h4>
                        <p className="text-dark3 ff-inter">What languages do you speak?</p>
                        <hr />
                    </div>

                    <div className="d-flex justify-content-start align-items-center gap-4">
                        <div className="d-flex justify-content-start align-items-center gap-2">
                            <Form.Check type="checkbox" id="langCheckBox1" name="language" value="Chinese" checked={lang?.find((i) => i === "Chinese")} onChange={handleCheck} />
                            <label htmlFor="langCheckBox1" className="text-clr-dark-2 fw-semibold text-uppercase fs-6 ltr-spacing-0">
                                Chinese
                            </label>
                        </div>
                        <div className="d-flex justify-content-start align-items-center gap-2">
                            <Form.Check type="checkbox" id="langCheckBox2" name="language" value="French" checked={lang?.find((i) => i === "French")} onChange={handleCheck} />
                            <label htmlFor="langCheckBox2" className="text-clr-dark-2 fw-semibold text-uppercase fs-6 ltr-spacing-0">
                                French
                            </label>
                        </div>
                        <div className="d-flex justify-content-start align-items-center gap-2">
                            <Form.Check type="checkbox" id="langCheckBox3" name="language" value="Bangla" checked={lang?.find((i) => i === "Bangla")} onChange={handleCheck} />
                            <label htmlFor="langCheckBox3" className="text-clr-dark-2 fw-semibold text-uppercase fs-6 ltr-spacing-0">
                                Bangla
                            </label>
                        </div>
                        <div className="d-flex justify-content-start align-items-center gap-2">
                            <Form.Check type="checkbox" id="langCheckBox4" name="language" value="Dutch" checked={lang?.find((i) => i === "Dutch")} onChange={handleCheck} />
                            <label htmlFor="langCheckBox4" className="text-clr-dark-2 fw-semibold text-uppercase fs-6 ltr-spacing-0">
                                Dutch
                            </label>
                        </div>
                    </div>

                    <div className="mt-5 mb-3">
                        <h4 className="fw-bold text-dark1">Family Status</h4>
                        <p className="text-dark3 ff-inter">Are you single?</p>
                        <hr />
                    </div>

                    <h6 className="text-dark1 ff-inter mt-4 mb-2">Marital Status</h6>
                    <div className="d-flex justify-content-start align-items-center gap-4">
                        <div className="d-flex justify-content-start align-items-center gap-2">
                            <Form.Check type="radio" id="statusCheckbox1" name="maritalStatus" value="Single" checked={maritalStatus === "Single"} onChange={(e) => setMaritalStatus(e.target.value)} />
                            <label htmlFor="statusCheckbox1" className="text-clr-dark-2 fw-semibold text-uppercase fs-6 ltr-spacing-0">
                                Single
                            </label>
                        </div>
                        <div className="d-flex justify-content-start align-items-center gap-2">
                            <Form.Check
                                type="radio"
                                id="statusCheckbox2"
                                name="maritalStatus"
                                value="Married"
                                checked={maritalStatus === "Married"}
                                onChange={(e) => setMaritalStatus(e.target.value)}
                            />
                            <label htmlFor="statusCheckbox2" className="text-clr-dark-2 fw-semibold text-uppercase fs-6 ltr-spacing-0">
                                Married
                            </label>
                        </div>
                    </div>

                    <div className="my-5 pt-5">
                        <hr />
                    </div>

                    <button className="commonBtn ff-inter bg-green discoverBtn text-uppercase ls-1 d-flex align-items-center justify-content-center text-white fs-12">Save Change</button>
                </form>
            </div>
            {/* PI Avatar /- END */}
        </div>
    );
};

export default ProfileInformation;
