import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import useStepFormContext from "../../hooks/useStepFormContext";
import "./categoryModal.scss";

const CategoryModal = ({ newFormData, handleUpdateChange }) => {

  const { formData, handleChange, updateMode } = useStepFormContext();


  const [showCategory, setShowCategory] = useState(false);

  const handleClose = () => setShowCategory(false);

  const handleShow = () => {
    setShowCategory(true);
  };

  const categoryList = [
    {
      categoryName: "Business & entrepreneurship class",
    },
    {
      categoryName: "Cultural dancing",
    },
    {
      categoryName: "Cultural festival",
    },
    {
      categoryName: "Culture talk",
    },
    {
      categoryName: "Culture tour",
    },
    {
      categoryName: "Factory tour",
    },
    {
      categoryName: "Language class",
    },
    {
      categoryName: "Office tour",
    },
    {
      categoryName: "Politics talk",
    },
    {
      categoryName: "Science class",
    },
    {
      categoryName: "Science talk",
    },
    {
      categoryName: "Science tour",
    },
    {
      categoryName: "Social cause talk",
    },
    {
      categoryName: "Social cause tour",
    },
    {
      categoryName: "Volunteering",
    },
    {
      categoryName: "Other culture & society experience",
    },
  ];

  

  return (
      <div>
          <button type="button" className="category-btn" onClick={handleShow}>
              Select Category
          </button>
          <Modal show={showCategory} onHide={handleClose} centered className="category-modal">
              <button className="close-btn border-0 bg-transparent" onClick={handleClose}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M9.21425 8L15.3666 0.666406C15.4697 0.544531 15.383 0.359375 15.2236 0.359375H13.3533C13.2432 0.359375 13.1377 0.408594 13.065 0.492969L7.99081 6.54219L2.91659 0.492969C2.84628 0.408594 2.74081 0.359375 2.62831 0.359375H0.758C0.598625 0.359375 0.511906 0.544531 0.615031 0.666406L6.76738 8L0.615031 15.3336C0.591931 15.3608 0.57711 15.394 0.57233 15.4293C0.56755 15.4647 0.57301 15.5006 0.588063 15.533C0.603116 15.5653 0.627129 15.5926 0.657252 15.6117C0.687375 15.6308 0.722341 15.6408 0.758 15.6406H2.62831C2.73847 15.6406 2.84394 15.5914 2.91659 15.507L7.99081 9.45781L13.065 15.507C13.1353 15.5914 13.2408 15.6406 13.3533 15.6406H15.2236C15.383 15.6406 15.4697 15.4555 15.3666 15.3336L9.21425 8Z"
                          fill="white"
                      />
                  </svg>
              </button>
              <div className="content-wrapper">
                  <h4 className="fs-30">Select a category</h4>
                  <div className="my-5">
                      <input type="text" name="Search" id="" className="search-input" placeholder="Search..." />
                  </div>
                  <div className="category-list">
                      <div className="row">
                          {categoryList.map((cat) => (
                              <div className="col-md-6" key={cat.categoryName}>
                                  <div key={cat?.categoryName} className="mb-3 d-flex justify-content-between align-items-center radio-cat-wrapper">
                                      <label htmlFor="catRadio" className="text-clr-dark-2 fw-semibold text-capitalize fs-6 ltr-spacing-0">
                                          {cat?.categoryName}
                                      </label>
                                      <Form.Check
                                          type="radio"
                                          id="catRadio"
                                          name="category"
                                          value={updateMode ? newFormData?.category : cat?.categoryName}
                                          checked={updateMode ? newFormData?.category === cat?.categoryName : formData.category === cat?.categoryName}
                                          onChange={updateMode ? handleUpdateChange : handleChange}
                                      />
                                  </div>
                              </div>
                          ))}
                          <div className="col-12">
                              <div className="action-btn">
                                  <button className="minimalBtn" onClick={handleClose}>
                                      Cancel
                                  </button>
                                  <button className="fillBtn" onClick={handleClose}>
                                      Save
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </Modal>
      </div>
  );
};

export default CategoryModal;
