import React from "react";

function InputComponent({
  type = "text",
  name = "",
  label = "",
  value = "",
  onChange = () => {},
  error = "",
  additionalClass = "",
  labelSpace = "",
  inputSpace = "",
}) {
  const displayLabel = label || (name.charAt(0).toUpperCase() + name.slice(1));

  return (
    <>
      <div className={`mb-3 ${additionalClass} mt-3`}>
        <div className={`input_lable ${labelSpace}`}>
          <label htmlFor={name} className="form-label">
            {displayLabel}
          </label>
        </div>
        <div className={inputSpace}>
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            className={`form-control ${error ? "is-invalid" : ""}`}
            onChange={onChange}
          />
        </div>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  );
}

export default InputComponent;
