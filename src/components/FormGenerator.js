import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormGenerator = () => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const navigate = useNavigate();

  const handleGenerateForms = () => {
    const forms = [];
  
    for (let i = 0; i < adultCount; i++) {
      forms.push({ key: `adult-${i}`, type: 'Adult', passenger: `Passenger ${i + 1}` });
    }
  
    for (let i = 0; i < childCount; i++) {
      forms.push({ key: `child-${i}`, type: 'Child', passenger: `Passenger ${i + adultCount + 1}` });
    }
  
    for (let i = 0; i < infantCount; i++) {
      forms.push({ key: `infant-${i}`, type: 'Infant', passenger: `Passenger ${i + adultCount + childCount + 1}` });
    }
  
    return forms;
  };

  const handleGenerateFormsClick = () => {
    // call the handleGenerateForms to generate an array of form data
    const generatedForms = handleGenerateForms();
    // convert the generated array into URL
    const formsQueryParam = encodeURIComponent(JSON.stringify(generatedForms));
    // UL includes query parameters to pass the generated form data and the current index
    navigate(`/generated-forms?forms=${formsQueryParam}&currentFormIndex=0`);
  };

  return (
    <div className="form-generator">
      <h1>Form Generator</h1>
      <div className="form-controls">
        <label>
          Adult Count:
          <input type="number" value={adultCount} onChange={(e) => setAdultCount(parseInt(e.target.value))} />
        </label>
        <label>
          Child Count:
          <input type="number" value={childCount} onChange={(e) => setChildCount(parseInt(e.target.value))} />
        </label>
        <label>
          Infant Count:
          <input type="number" value={infantCount} onChange={(e) => setInfantCount(parseInt(e.target.value))} />
        </label>
      </div>
      <button onClick={handleGenerateFormsClick}>Generate Forms</button>
    </div>
  );
};

export default FormGenerator;
