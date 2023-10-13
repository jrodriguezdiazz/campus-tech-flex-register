import { ErrorMessage, Field } from 'formik';
import React from 'react';

const Input = ({ label, name, ...rest }) => {
  return (
    <div className="input-group">
      <label>{label}:</label>
      <Field type="text" name={name} {...rest} />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default Input;
