import React from "react";
import { FloatingLabel, Form, Row } from "react-bootstrap";
import useStepFormContext from "../../hooks/useStepFormContext";

const StepFive = ({
  newFormData,
  handleUpdateChange,
  uploadProgress,
  imgUrl,
}) => {
  const { formData, handleChange, updateMode } = useStepFormContext();

  return (
    <div className="step-five">
      <h2 className="text-clr-dark-1fs-48">Photos</h2>
      <p className="fs-18 text-clr-dark-3 ff-inter mb-5">
        We’ll review every photo before it goes live on your event page.
      </p>

      <Row className="g-4">
        {uploadProgress > 0 ? (
          <p className="ff-inter text-clr-egyptian-green fw-bold">
            Uploading{" "}
            <span className="text-clr-egyptian-green">{uploadProgress}%</span>
          </p>
        ) : (
          <FloatingLabel controlId="uploadImg" label="Upload Image">
            <Form.Control
              type="file"
              name="photos"
              accept="image/*"
              placeholder="Upload Image"
              onChange={updateMode ? handleUpdateChange : handleChange}
              formEncType="multipart/form-data"
              required
            />
          </FloatingLabel>
        )}

        {imgUrl && (
          <div className="mt-4 d-flex justify-content-center">
            <img className="img-fluid w-200" src={imgUrl} alt="img" />
          </div>
        )}

        <FloatingLabel controlId="videoLink" label="Video Link">
          <Form.Control
            type="text"
            placeholder="Video Link"
            name="videoLink"
            value={updateMode ? newFormData?.videoLink : formData?.videoLink}
            onChange={updateMode ? handleUpdateChange : handleChange}
          />
        </FloatingLabel>
      </Row>
    </div>
  );
};

export default StepFive;
