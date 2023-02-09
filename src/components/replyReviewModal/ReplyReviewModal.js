import axios from 'axios';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

const ReplyReviewModal = ({ review, singleDetails, reFetch }) => {

  const { user } = useAuth();

   const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [replyDesc, setReplyDesc] = useState("");

    const handleSubmit = async (e) => {
      
      e.preventDefault();

      const replyReview = {

        reviewId: review?._id,
        replyerName: user?.name,
        replyDesc: replyDesc,
        replyTime: new Date()
      };

    setLoading(true);

    if (singleDetails?.username === user?.username) {
      try {
          await axios.put(`https://global-life-api.onrender.com/api/reviews/${review?._id}/reply`, replyReview);

          toast.success("Successfully Submitted");
          reFetch();

      } catch (err) {

          console.log(err);
          toast.error("There is something wrong");

      }
    }else{
      toast.error("You Can Not Reply Other Post");
    }

    setLoading(false);
    handleClose();

  };

  return (
      <div>
          <Link className="fw-medium d-flex gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase" onClick={handleShow}>
              Reply
          </Link>
          <Modal show={show} onHide={handleClose} centered className="delete-modal">
              <button className="close-btn border-0 bg-transparent" onClick={handleClose}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M9.21425 8L15.3666 0.666406C15.4697 0.544531 15.383 0.359375 15.2236 0.359375H13.3533C13.2432 0.359375 13.1377 0.408594 13.065 0.492969L7.99081 6.54219L2.91659 0.492969C2.84628 0.408594 2.74081 0.359375 2.62831 0.359375H0.758C0.598625 0.359375 0.511906 0.544531 0.615031 0.666406L6.76738 8L0.615031 15.3336C0.591931 15.3608 0.57711 15.394 0.57233 15.4293C0.56755 15.4647 0.57301 15.5006 0.588063 15.533C0.603116 15.5653 0.627129 15.5926 0.657252 15.6117C0.687375 15.6308 0.722341 15.6408 0.758 15.6406H2.62831C2.73847 15.6406 2.84394 15.5914 2.91659 15.507L7.99081 9.45781L13.065 15.507C13.1353 15.5914 13.2408 15.6406 13.3533 15.6406H15.2236C15.383 15.6406 15.4697 15.4555 15.3666 15.3336L9.21425 8Z"
                          fill="white"
                      />
                  </svg>
              </button>
              {/* {loading && (
            <div className="d-flex justify-content-center align-items-center w-100">
              <Spinner
                className="d-flex justify-content-center align-items-center"
                animation="grow"
                variant="warning"
              />
            </div>
          )} */}
              {/* {!loading && !error && ( */}
              <>
                  <h3 className="fs-30 text-dark1">Reply a review</h3>

                  <form onSubmit={handleSubmit}>
                      <h6 className="ff-inter mt-4 mb-3">Reply from Organizer</h6>
                      <textarea
                          className="p-4 w-100"
                          placeholder="This is where you write your review. Explain what happened, and leave out offensive words. Keep your feedback honest, helpful, and constructive."
                          id="floatingTextarea"
                          rows={4}
                          value={replyDesc}
                          onChange={(e) => setReplyDesc(e.target.value)}
                      ></textarea>

                      <button
                          type="submit"
                          className="footer-btn w-100 mt-3"
                          disabled={loading}
                      >
                          {loading ? "Loading" : "Submit"}
                      </button>
                  </form>
              </>
              {/* // )} */}
              {/* {!loading && error && (
            <p className="fs-5 ff-inter text-danger mb-0">
              Error Occured !!! Please try again later.
            </p>
          )} */}
          </Modal>
      </div>
  );
};

export default ReplyReviewModal;