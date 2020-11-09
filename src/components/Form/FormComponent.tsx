import React from "react";
import { Form, Field } from "react-final-form";
import { FiX } from "react-icons/fi";

import "./formcomponent.css";

interface FormComponentProps {
  closeModal: () => void;
  endClass: () => void;
}

const FormComponent = ({ closeModal, endClass }: FormComponentProps) => {
  const onSubmit = async (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <div className="close-icon">
        <FiX size={20} color="#54585d" onClick={closeModal} />
      </div>
      <Form
        onSubmit={onSubmit}
        initialValues={{ reason: "completed" }}
        render={({ handleSubmit, submitting, pristine, values }) => (
          <form className="form" onSubmit={handleSubmit}>
            <h1>Select a reason to end class</h1>
            <div>
              <label>
                <Field
                  name="reason"
                  component="input"
                  type="radio"
                  value="completed"
                />
                <span>Class completed</span>
              </label>
            </div>
            <div>
              <label>
                <Field
                  name="reason"
                  component="input"
                  type="radio"
                  value="interrupted"
                />
                <span>Class interrupted/aborted</span>
              </label>
            </div>
            {values.reason === "interrupted" && (
              <div className="sub-menu">
                <div>
                  <label>
                    <Field
                      name="sub_reason"
                      value="no-show"
                      component="input"
                      type="radio"
                    />
                    <span>Student didn't show up for the class</span>
                  </label>
                </div>
                <div>
                  <label>
                    <Field
                      name="sub_reason"
                      value="no-interest"
                      component="input"
                      type="radio"
                    />
                    <span>Student didn't show any interest</span>
                  </label>
                </div>
                <div>
                  <label>
                    <Field
                      name="sub_reason"
                      value="student-disconnected"
                      component="input"
                      type="radio"
                    />
                    <span>Student got disconnected</span>
                  </label>
                </div>
                <div>
                  <label>
                    <Field
                      name="sub_reason"
                      value="disconnected"
                      component="input"
                      type="radio"
                    />
                    <span>I got disconnected</span>
                  </label>
                </div>
                <div>
                  <label>
                    <Field
                      name="sub_reason"
                      value="other"
                      component="input"
                      type="radio"
                    />
                    <span>Other reason</span>
                  </label>
                </div>
                {values.sub_reason === "other" && (
                  <Field
                    name="other"
                    component="textarea"
                    placeholder="Type here"
                  />
                )}
              </div>
            )}
            <div className="form-btn">
              <button type="submit" onClick={endClass} className="end-btn">
                End Class
              </button>
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default FormComponent;
