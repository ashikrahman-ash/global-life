import React from 'react';
import useStepFormContext from '../../hooks/useStepFormContext';
import CategoryModal from '../categoryModal/CategoryModal';
import './step.scss';

const StepTwo = ({ newFormData, handleUpdateChange }) => {

  const { formData, updateMode } = useStepFormContext();

  return (
    <div className="step-two">
      <h2 className="text-clr-dark-1fs-48">Category</h2>
      <p className="fs-18 text-clr-dark-3 ff-inter mb-5">
        What will your event focus on?
      </p>

      <div className="category-modal">
        <CategoryModal
          newFormData={newFormData}
          handleUpdateChange={handleUpdateChange}
        />
      </div>

      <div>
        <input
          type="text"
          className="form-control ps-0 mt-4"
          placeholder="Add an Additional category (Optional)"
          name="addCategory"
          defaultValue={updateMode ? newFormData?.category : formData?.category}
        />
      </div>
    </div>
  );
};

export default StepTwo;