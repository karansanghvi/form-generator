import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FormGenerator from './components/FormGenerator';
import GeneratedForms from './components/GeneratedForms';
import FormSubmission from './components/FormSubmission';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormGenerator />} />
        <Route path="/generated-forms" element={<GeneratedForms />} />
        <Route path='/submission-success' element={<FormSubmission/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
