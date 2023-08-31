import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from './Form';

const GeneratedForms = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const formsQueryParam = searchParams.get('forms');
  const forms = formsQueryParam ? JSON.parse(decodeURIComponent(formsQueryParam)) : [];
  const currentFormIndex = parseInt(searchParams.get('currentFormIndex') || 0);
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (currentFormIndex < forms.length - 1) {
      navigate(`/generated-forms?forms=${formsQueryParam}&currentFormIndex=${currentFormIndex + 1}`);
    }
  };

  const handleBackClick = () => {
    if (currentFormIndex > 0) {
      navigate(`/generated-forms?forms=${formsQueryParam}&currentFormIndex=${currentFormIndex - 1}`);
    }
  };

  const isLastForm = currentFormIndex === forms.length - 1;

  const handleSubmitClick = () => {
    navigate(`/submission-success`);
  };

  return (
    <div className="generated-forms">
      <h1>Generated Forms</h1>
      <div className="form-container">
        {forms.length > 0 && currentFormIndex >= 0 && currentFormIndex < forms.length && (
          <div>
            <h2>{forms[currentFormIndex].passenger}</h2>
            <Form type={forms[currentFormIndex].type} />
            <div className="navigation-buttons">
              {isLastForm ? (
                <button onClick={handleSubmitClick}>Submit</button>
              ) : (
                <>
                  <button onClick={handleBackClick} disabled={currentFormIndex === 0}>Back</button>
                  <button onClick={handleNextClick} disabled={currentFormIndex === forms.length - 1}>Next</button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default GeneratedForms;
