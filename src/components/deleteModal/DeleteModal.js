import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useStepFormContext from '../../hooks/useStepFormContext';
import './deleteModal.scss';

const DeleteModal = ({ currentData, reFetch }) => {

    const { loading, setLoading, error, setError } = useStepFormContext();

    const [show, setShow] = useState(false);

    const [deleteData, setDeleteData] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setDeleteData(currentData);
    }, [currentData]);

    const { user } = useAuth();

    const handleDelete = async () => {
        setLoading(true);
        try {
            await axios.delete(`https://global-life-api.onrender.com/api/events/allevents/${deleteData?._id}`, {
                data: { username: user.username },
            });

            toast.success("Successfully Deleted");

            reFetch();
            
        } catch (err) {
            setError(err);
            toast.error("There is something wrong");
            console.log(err);
        }
        setLoading(false);
    };

    return (
        <div>
            <button className="card-footer-btn" onClick={handleShow}>
                <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.27344 2.69531H5.15625C5.2207 2.69531 5.27344 2.64258 5.27344 2.57812V2.69531H9.72656V2.57812C9.72656 2.64258 9.7793 2.69531 9.84375 2.69531H9.72656V3.75H10.7812V2.57812C10.7812 2.06104 10.3608 1.64062 9.84375 1.64062H5.15625C4.63916 1.64062 4.21875 2.06104 4.21875 2.57812V3.75H5.27344V2.69531ZM12.6562 3.75H2.34375C2.08447 3.75 1.875 3.95947 1.875 4.21875V4.6875C1.875 4.75195 1.92773 4.80469 1.99219 4.80469H2.87695L3.23877 12.4658C3.26221 12.9653 3.67529 13.3594 4.1748 13.3594H10.8252C11.3262 13.3594 11.7378 12.9668 11.7612 12.4658L12.123 4.80469H13.0078C13.0723 4.80469 13.125 4.75195 13.125 4.6875V4.21875C13.125 3.95947 12.9155 3.75 12.6562 3.75ZM10.7124 12.3047H4.2876L3.93311 4.80469H11.0669L10.7124 12.3047Z"
                            fill="#4D585F"
                        />
                    </svg>
                </span>
                DELETE
            </button>

            <Modal show={show} onHide={handleClose} centered className="delete-modal">
                <button className="close-btn border-0 bg-transparent" onClick={handleClose}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.21425 8L15.3666 0.666406C15.4697 0.544531 15.383 0.359375 15.2236 0.359375H13.3533C13.2432 0.359375 13.1377 0.408594 13.065 0.492969L7.99081 6.54219L2.91659 0.492969C2.84628 0.408594 2.74081 0.359375 2.62831 0.359375H0.758C0.598625 0.359375 0.511906 0.544531 0.615031 0.666406L6.76738 8L0.615031 15.3336C0.591931 15.3608 0.57711 15.394 0.57233 15.4293C0.56755 15.4647 0.57301 15.5006 0.588063 15.533C0.603116 15.5653 0.627129 15.5926 0.657252 15.6117C0.687375 15.6308 0.722341 15.6408 0.758 15.6406H2.62831C2.73847 15.6406 2.84394 15.5914 2.91659 15.507L7.99081 9.45781L13.065 15.507C13.1353 15.5914 13.2408 15.6406 13.3533 15.6406H15.2236C15.383 15.6406 15.4697 15.4555 15.3666 15.3336L9.21425 8Z"
                            fill="white"
                        />
                    </svg>
                </button>

                {loading && (
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <Spinner className="d-flex justify-content-center align-items-center" animation="grow" variant="warning" />
                    </div>
                )}

                {!loading && !error && (
                    <>
                        <h3 className="fs-2 text-center text-dark1">Are you sure you want to remove this experience?</h3>
                        <p className="fs-14 text-center ff-inter mt-4 mb-5">
                            You won’t be able to find or edit your experience page, and any future unbooked instances will be removed from search results.
                        </p>

                        <Modal.Footer className="pb-0 m-0">
                            <button className="footer-btn" onClick={handleClose}>
                                Cancel
                            </button>
                            <button className="footer-btn ms-3" onClick={handleDelete} disabled={!deleteData?._id}>
                                Confirm
                            </button>
                        </Modal.Footer>
                    </>
                )}

                {!loading && error && <p className="fs-5 ff-inter text-danger mb-0">Error Occured !!! Please try again later.</p>}
            </Modal>
        </div>
    );
};

export default DeleteModal;