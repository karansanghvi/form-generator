import React from 'react';

const Form = ({ type, onNameChange }) => {
  return (
    <div className="form">
      <form>
        <label>
          Enter your name:
          <input type="text" onChange={onNameChange} />
        </label>
      </form>
    </div>
  );
};

export default Form;
