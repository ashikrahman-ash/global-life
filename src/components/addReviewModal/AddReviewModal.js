import axios from 'axios';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

const AddReviewModal = ({ singleDetails, reFetch }) => {
  
  const { user } = useAuth();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [reviewDesc, setReviewDesc] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [checked, setChecked] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const stars = Array(5).fill(0);

  const handleRate = (value) => {
    setRatingValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = {
      userId: user?._id,
      username: user?.username,
      name: user?.name,
      postId: singleDetails?._id,
      reviewDesc: reviewDesc,
      reviewTitle: reviewTitle,
      aggrement: checked,
      rating: ratingValue,
      replyReview: [],
    };

    setLoading(true);

    if (singleDetails?.userId !== user?._id) {
      try {
          await axios.post(
            "https://global-life-api.onrender.com/api/reviews/addReview",
            review
          );

          setReviewDesc("");
          setReviewTitle("");

          toast.success("Successfully Submitted");
          reFetch();

      } catch (err) {

          toast.error("There is something wrong");
      }
    } else {
      toast.error("You Can Not Review Your Post")
    }
     
    setLoading(false);
     handleClose();
    
  };

  return (
      <div>
          <Link className="text-clr-egyptian-green fw-medium" onClick={handleShow}>
              Write a review
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
              <>
                  <h3 className="fs-30 text-dark1">Write a review</h3>

                  <form onSubmit={handleSubmit}>
                      <h6 className="ff-inter mt-4 mb-3">Tell us about your experience</h6>

                      <div className="d-flex justify-content-start gap-2 mb-3">
                          {stars.map((star, index) => (
                              <svg
                                  key={index}
                                  width="48"
                                  height="48"
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  onClick={() => handleRate(index + 1)}
                                  onMouseOver={() => handleMouseOver(index + 1)}
                                  onMouseLeave={handleMouseLeave}
                              >
                                  <rect width="48" height="48" fill={`${(hoverValue || ratingValue) > index ? "#17BD8D" : "#E3E8EB"}`} />
                                  <path d="M24 8L27.5922 19.0557H39.2169L29.8123 25.8885L33.4046 36.9443L24 30.1115L14.5954 36.9443L18.1877 25.8885L8.7831 19.0557H20.4078L24 8Z" fill="white" />
                              </svg>
                          ))}
                      </div>

                      <textarea
                          className="p-4 w-100"
                          placeholder="This is where you write your review. Explain what happened, and leave out offensive words. Keep your feedback honest, helpful, and constructive."
                          id="floatingTextarea"
                          rows={4}
                          value={reviewDesc}
                          onChange={(e) => setReviewDesc(e.target.value)}
                      ></textarea>

                      <h6 className="ff-inter my-3">Give your review a title</h6>
                      <input type="text" placeholder="Write the title of your review here" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} />

                      <div className="form-check my-3">
                          <input className="form-check-input" type="checkbox" checked={checked} id="flexCheckDefault" onChange={(e) => setChecked(e.target.checked)} />
                          <label className="form-check-label" for="flexCheckDefault">
                              I confirm this review is about my own genuine experience.
                          </label>
                      </div>

                      <button
                          type="submit"
                          className="footer-btn w-100"
                          disabled={loading}
                      >
                          {loading ? "Loading" : "Submit Review"}
                      </button>
                  </form>
              </>
          </Modal>
      </div>
  );
};

export default AddReviewModal;