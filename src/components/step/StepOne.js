import React from "react";
import { Form } from "react-bootstrap";
import useStepFormContext from "../../hooks/useStepFormContext";
import TextEditor from "../textEditor/TextEditor";
import "./step.scss";

const StepOne = ({ newFormData, handleUpdateChange }) => {
    

    const { formData, handleChange, updateMode } = useStepFormContext();

    // console.log(newFormData);


    return (
        <div className="step-one">
            <h2 className="text-clr-dark-1fs-48">Description</h2>
            <div className="mt-5">
                <h5 className="fs-18 ff-inter fw-semibold text-clr-dark-1">Title</h5>
                <p className="text-clr-dark-3 ff-inter mb-4">Let’s give your event a name</p>
                <div className="title-input-box">
                    <label>TITLE</label>
                    <input
                        type="text"
                        className="custom-form"
                        placeholder="Title goes here"
                        max={60}
                        name="title"
                        value={updateMode ? newFormData?.title : formData?.title}
                        onChange={updateMode ? handleUpdateChange : handleChange}
                        required
                    />
                </div>
                <p className="fs-12 ff-inter text-clr-dark-4 mt-1">0/60</p>
            </div>

            <div className="mt-5">
                <h5 className="fs-18 ff-inter fw-semibold text-clr-dark-1">Choose Your Post Type ...</h5>
                <Form.Select
                    name="postType"
                    value={updateMode ? newFormData?.postType : formData?.postType}
                    aria-label="Choose Your Post Type ..."
                    required
                    onChange={updateMode ? handleUpdateChange : handleChange}
                >
                    <option>Choose Your Post Type ...</option>
                    <option value="Event">Event</option>
                    <option value="Experience">Experience</option>
                </Form.Select>
            </div>

            <div className="mt-5">
                <h5 className="fs-18 ff-inter fw-semibold text-clr-dark-1">Description</h5>
                <p className="text-clr-dark-3 ff-inter mb-4">Add more details to your event.</p>

                <TextEditor description={newFormData} />

            </div>
        </div>
    );
};

export default StepOne;
