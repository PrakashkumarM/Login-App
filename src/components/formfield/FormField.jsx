import React from "react";
import "./FormField.css"; // We'll create this CSS file next

function FormField({ label, type, value, onChange }) {
  return (
    <div className="form-field">
      <label>{label}</label>
     
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default FormField;
