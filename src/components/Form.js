import React from 'react';

const Form = ({ type }) => {
  return (
    <div className="form">
      <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
    </div>
  );
};

export default Form;
