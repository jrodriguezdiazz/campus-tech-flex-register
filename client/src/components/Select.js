import { ErrorMessage, Field } from 'formik';
import React from 'react';

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className="input-group">
      <label>{label}:</label>
      <Field as="select" name={name} {...rest} className="dropdown">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default Select;
