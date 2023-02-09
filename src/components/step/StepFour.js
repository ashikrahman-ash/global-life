import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import useStepFormContext from '../../hooks/useStepFormContext';

const StepFour = ({ newFormData, handleUpdateChange }) => {

  const { formData, handleChange, updateMode } = useStepFormContext();

  return (
    <div className="step-four">
      <h2 className="text-clr-dark-1fs-48">Date, Time and Costs</h2>
      <p className="fs-18 text-clr-dark-3 ff-inter mb-5">
        Tell event-goers when your event starts and ends so they can make plans
        to attend.
      </p>

      <Row className="g-4">
        <Col md>
          <FloatingLabel controlId="eventStart" label="Event Starts">
            <Form.Control
              type="date"
              placeholder="Event Starts"
              name="startDate"
              value={updateMode ? newFormData?.startDate : formData?.startDate}
              onChange={updateMode ? handleUpdateChange : handleChange}
              required
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="eventEnd" label="Event End">
            <Form.Control
              type="date"
              placeholder="Event End"
              name="endDate"
              value={updateMode ? newFormData?.endDate : formData?.endDate}
              onChange={updateMode ? handleUpdateChange : handleChange}
              required
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="startTime" label="Start Time">
            <Form.Control
              type="time"
              placeholder="Start Time"
              name="startTime"
              value={updateMode ? newFormData?.startTime : formData?.startTime}
              onChange={updateMode ? handleUpdateChange : handleChange}
              required
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="endTime" label="Event End">
            <Form.Control
              type="time"
              placeholder="Event End"
              name="endTime"
              value={updateMode ? newFormData?.endTime : formData?.endTime}
              onChange={updateMode ? handleUpdateChange : handleChange}
              required
            />
          </FloatingLabel>
        </Col>
        <FloatingLabel controlId="cost" label="Individual Cost">
          <Form.Control
            type="number"
            placeholder="Individual Cost"
            name="cost"
            value={updateMode ? newFormData?.cost : formData?.cost}
            onChange={
              updateMode ? handleUpdateChange : handleChange
            }
          />
        </FloatingLabel>
      </Row>
    </div>
  );
};

export default StepFour;