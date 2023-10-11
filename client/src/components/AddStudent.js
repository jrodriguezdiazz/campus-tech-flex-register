import { ErrorMessage, Field, FormikProvider, useFormik } from 'formik';
import React from 'react';
import usePostStudent from '../hooks/usePostStudent';
import validationSchema from '../validations/student';
import './AddStudent.css';

function AddStudent() {
  const { postStudent, error, loading } = usePostStudent();

  const formik = useFormik({
    initialValues: {
      code: '',
      name: '',
      last_name: '',
      birthday: '',
      sex: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const success = await postStudent(values);
      if (success) {
        resetForm();
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <div className="add-student">
        <h2 className="title">Add Student</h2>
        {error && <p className="error">{error.message}</p>}
        <form onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <label htmlFor="code">Code:</label>
            <Field id="code" name="code" type="text" />
            <ErrorMessage name="code" component="div" className="error" />
          </div>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <Field id="name" name="name" type="text" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="input-group">
            <label htmlFor="last_name">Last Name:</label>
            <Field id="last_name" name="last_name" type="text" />
            <ErrorMessage name="last_name" component="div" className="error" />
          </div>
          <div className="input-group">
            <label htmlFor="sex">Sex:</label>
            <Field id="sex" name="sex" type="text" />
            <ErrorMessage name="sex" component="div" className="error" />
          </div>
          <div className="input-group">
            <label htmlFor="birthday">Birthday:</label>
            <Field id="birthday" name="birthday" type="text" />
            <ErrorMessage name="birthday" component="div" className="error" />
          </div>
          <button type="submit" disabled={loading}>
            Add
          </button>
        </form>
      </div>
    </FormikProvider>
  );
}

export default AddStudent;
