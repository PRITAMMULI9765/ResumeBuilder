import React, { useState } from "react";
import { registerUserSchema } from "./auth.schema.jsx";
import InputComponent from "../Component/InputComponent.jsx";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const result = registerUserSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = result.error.flatten ? result.error.flatten().fieldErrors : {};
      const simplified = {};
      for (const key in fieldErrors) {
        if (fieldErrors[key] && fieldErrors[key].length > 0) simplified[key] = fieldErrors[key][0];
      }
      setErrors(simplified);
      return;
    }
    setErrors({});
    console.log("Validated data:", result.data);
    // TODO: send `result.data` to your API
    alert("Validation passed — check console for submitted data.");
  };

  return (
    <form onSubmit={onSubmit} noValidate>
        <InputComponent type="text" onChange={handleChange} name="name" error={errors.name} />
      {/* <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div> */}
      <InputComponent type="email" onChange={handleChange} name="email" error={errors.email} />
      <InputComponent type="password" onChange={handleChange} name="password" error={errors.password} />

      <InputComponent type="password" onChange={handleChange} name="file" error={errors.confirmPassword} />

      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <select id="role" name="role" className="form-select" value={form.role} onChange={handleChange}>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
        {errors.role && <div className="invalid-feedback d-block">{errors.role}</div>}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Signup;
