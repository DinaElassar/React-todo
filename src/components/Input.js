import React from "react";

const Input = ({ label, type = "text", value, onChange, required = false }) => (
  <div>
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} required={required} />
  </div>
);

export default Input;
