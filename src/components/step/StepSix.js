import React, { useState } from 'react';
import useStepFormContext from '../../hooks/useStepFormContext';

const StepSix = ({ newFormData, handleUpdateChange }) => {

  const { formData } = useStepFormContext();

  // const handleAdd = () => {};

  const [tags, setTags] = useState([]);

    const addTag = (e) => {
        // If user did not press enter key, return
        if (e.key !== "Enter") return;
        // Get the value of the input
        const value = e.target.value;
        // If the value is empty, return
        if (!value.trim()) return;
        // Add the value to the tags array
        setTags([...tags, value]);

        formData?.tags?.push(value);

        e.target.value = "";
    }

    // const removeTag = (index) => {
    //    setTags(formData?.tags?.filter((el, i) => i !== index))
    // }

    // console.log(formData?.tags);

  return (
      <div className="step-six">
          <h2 className="text-clr-dark-1fs-48">Tags</h2>
          <p className="fs-18 text-clr-dark-3 ff-inter mb-5">Improve discoverability of your event by adding tags relevant to the subject matter.</p>

          {/* <Row className="g-4">
              <FloatingLabel controlId="addTag" label="Add Tag">
                  <Form.Control
                      type="text"
                      placeholder="Add Tag"
                      name="tags"
                      value={updateMode ? newFormData?.tags : formData?.tags}
                      onChange={updateMode ? handleUpdateChange : handleChange}
                      required
                  />
              </FloatingLabel>
          </Row> */}
          {/* <button
        className="mt-4 btn btn-success"
        type="button"
        onClick={handleAdd}
      >
        ADD
      </button> */}

          <div className="tags-input-container">
              {formData?.tags?.map((tag, index) => (
                  <div className="tag-item" key={index}>
                      <span className="text ff-inter">{tag}</span>
                      {/* <span
                          className="close"
                          onClick={() => {
                              removeTag(index);
                          }}
                      >
                          &times;
                      </span> */}
                  </div>
              ))}

              <input onKeyDown={addTag} type="text" className="tags-input" placeholder="Type your tag" required />
          </div>
      </div>
  );
};

export default StepSix;