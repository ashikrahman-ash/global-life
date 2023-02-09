import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import CreateEventIcon from "../../assets/images/create-event-icon.png";
import CreateExperienceIcon from "../../assets/images/create-experience-icon.png";
import StepFormModal from "../stepFormModal/StepFormModal";
import "./postTypeModal.scss";

const PostTypeModal = ({ reFetch }) => {

    const [showPostTypeModal, setSWhowPostTypeModal] = useState(false);

    const [showCreateBtn, setShowCreateBtn] = useState(false);

    const handleModalClose = () => setSWhowPostTypeModal(false);

    const handleModalShow = () => {
        setShowCreateBtn(true);
        setSWhowPostTypeModal(true);
    };

    // console.log(showCreateBtn);

    return (
        <div>
            <button className="yellow-btn fs-12 lh-15 fw-semiBold text-uppercase ls-1 text-dark1 bg-yellow ff-inter d-flex align-items-center gap-2 border-0" onClick={handleModalShow}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.06055 2.22656H7.93945C8.01758 2.22656 8.05664 2.26562 8.05664 2.34375V12.6562C8.05664 12.7344 8.01758 12.7734 7.93945 12.7734H7.06055C6.98242 12.7734 6.94336 12.7344 6.94336 12.6562V2.34375C6.94336 2.26562 6.98242 2.22656 7.06055 2.22656Z"
                        fill="#1A2227"
                    />
                    <path
                        d="M2.57812 6.94336H12.4219C12.5 6.94336 12.5391 6.98242 12.5391 7.06055V7.93945C12.5391 8.01758 12.5 8.05664 12.4219 8.05664H2.57812C2.5 8.05664 2.46094 8.01758 2.46094 7.93945V7.06055C2.46094 6.98242 2.5 6.94336 2.57812 6.94336Z"
                        fill="#1A2227"
                    />
                </svg>

                <span>Create an event/experience</span>
            </button>

            <Modal show={showPostTypeModal} onHide={handleModalClose} centered className="post-modal">
                <button className="close-btn border-0 bg-transparent" onClick={handleModalClose}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.21425 8L15.3666 0.666406C15.4697 0.544531 15.383 0.359375 15.2236 0.359375H13.3533C13.2432 0.359375 13.1377 0.408594 13.065 0.492969L7.99081 6.54219L2.91659 0.492969C2.84628 0.408594 2.74081 0.359375 2.62831 0.359375H0.758C0.598625 0.359375 0.511906 0.544531 0.615031 0.666406L6.76738 8L0.615031 15.3336C0.591931 15.3608 0.57711 15.394 0.57233 15.4293C0.56755 15.4647 0.57301 15.5006 0.588063 15.533C0.603116 15.5653 0.627129 15.5926 0.657252 15.6117C0.687375 15.6308 0.722341 15.6408 0.758 15.6406H2.62831C2.73847 15.6406 2.84394 15.5914 2.91659 15.507L7.99081 9.45781L13.065 15.507C13.1353 15.5914 13.2408 15.6406 13.3533 15.6406H15.2236C15.383 15.6406 15.4697 15.4555 15.3666 15.3336L9.21425 8Z"
                            fill="white"
                        />
                    </svg>
                </button>
                <h3 className="fs-30 text-center mb-4">Create an event/experience</h3>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="type bg-lemon-yellow">
                            <img src={CreateEventIcon} alt="img" />
                            {/* <button className="border-0 bg-transparent ff-inter fw-semibold mt-3">Create an event</button> */}
                            <StepFormModal handleModalClose={handleModalClose} setSWhowPostTypeModal={setSWhowPostTypeModal} showCreateBtn={showCreateBtn} reFetch={reFetch} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="type bg-sky-blue">
                            <img src={CreateExperienceIcon} alt="img" />
                            <button className="border-0 bg-transparent ff-inter fw-semibold mt-3">Create an experience</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PostTypeModal;
