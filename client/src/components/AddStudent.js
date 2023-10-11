import { useFormik } from 'formik';
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
    <div className="add-student">
      <h2 className="title">Add Student</h2>
      {error && <p className="error">{error.message}</p>}
      <form onSubmit={formik.handleSubmit}>
        <div className="input-group">
          <label htmlFor="code">Code:</label>
          <input
            id="code"
            name="code"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.code}
          />
          {formik.touched.code && formik.errors.code ? (
            <div className="error">{formik.errors.code}</div>
          ) : null}
        </div>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="input-group">
          <label htmlFor="last_name">Last Name:</label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.last_name}
          />
          {formik.touched.last_name && formik.errors.last_name ? (
            <div className="error">{formik.errors.last_name}</div>
          ) : null}
        </div>
        <div className="input-group">
          <label htmlFor="sex">Sex:</label>
          <input
            id="sex"
            name="sex"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sex}
          />
          {formik.touched.sex && formik.errors.sex ? (
            <div className="error">{formik.errors.sex}</div>
          ) : null}
        </div>
        <div className="input-group">
          <label htmlFor="birthday">Birthday:</label>
          <input
            id="birthday"
            name="birthday"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthday}
          />
          {formik.touched.birthday && formik.errors.birthday ? (
            <div className="error">{formik.errors.birthday}</div>
          ) : null}
        </div>
        <button type="submit" disabled={loading}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
