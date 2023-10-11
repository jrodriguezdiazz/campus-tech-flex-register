import { ErrorMessage, Field, FormikProvider, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useUpdateStudent from '../hooks/useUpdateStudent';
import validationSchema from '../validations/student';
import './EditStudent.css';
import Loading from './Loading';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const { updateStudent, error, loading } = useUpdateStudent();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/students/${id}`);
        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    }

    fetchData();
  }, [id]);

  const initialValues = {
    name: student ? student.name : '',
    last_name: student ? student.last_name : '',
    sex: student ? student.sex : '',
    birthday: student ? student.birthday : '',
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const success = await updateStudent(id, values);
      if (success) {
        navigate('/');
      }
      setSubmitting(false);
    },
  });

  if (!student) return <Loading />;

  return (
    <FormikProvider value={formik}>
      <div className="edit-student">
        <h2>Editar Estudiante</h2>
        {error && <p className="error">{error.message}</p>}
        <form onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <label>Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="input-group">
            <label>Last Name:</label>
            <Field type="text" name="last_name" />
            <ErrorMessage name="last_name" component="div" className="error" />
          </div>
          <div className="input-group">
            <label>Sex:</label>
            <Field type="text" name="sex" />
            <ErrorMessage name="sex" component="div" className="error" />
          </div>
          <div className="input-group">
            <label>Birthday:</label>
            <Field type="text" name="birthday" />
            <ErrorMessage name="birthday" component="div" className="error" />
          </div>
          <button type="submit" disabled={formik.isSubmitting}>
            Save Changes
          </button>
        </form>
      </div>
    </FormikProvider>
  );
}

export default EditStudent;
