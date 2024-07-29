import React, { useState } from "react";
import "./Popup.css";

const Popup = ({ show, onClose }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    resume: null
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  if (!show) {
    return null;
  }
  return (
    <div className="popup">
      <div className="popup-content">
      <h2>Apply Now</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>
            <input className="w-100" type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            
            <input className="w-100" type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            
            <input className="w-100" type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
          </label>
          <label>
            Resume:
            <input className="w-100" type="file" name="resume" accept=".pdf" onChange={handleFileChange} required />
          </label>
          <div style={{display:"flex" , justifyContent:"space-between"}}>
          <button type="submit" onClick={()=>setTimeout(()=>onClose(),750)} className="btn btn-light btn-radius">
                    Apply
                  </button>
          
          <button type="button" onClick={onClose} className="close-button">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
