import React from 'react';
import { useLocation } from 'react-router-dom';

function FormSubmission() {
  const location = useLocation();
  const submittedForms = location.state ? location.state.submittedForms : [];

  return (
    <div>
      <h1>FORM SUBMITTED SUCCESSFULLY</h1>
      <h2>Submitted Form Data:</h2>
      <ul>
        {submittedForms.map((form, index) => (
          <li key={index}>
            Passenger {index + 1} ({form.type}): {form.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormSubmission;
