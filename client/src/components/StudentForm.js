import { Form, FormikProvider, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePostStudent from '../hooks/usePostStudent';
import useUpdateStudent from '../hooks/useUpdateStudent';
import { SEX_OPTIONS } from '../utils/constants';
import validationSchema from '../validations/student';
import Input from './Input';
import Loading from './Loading';
import Select from './Select';
import './StudentForm.css';

function StudentForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const {
    updateStudent,
    error: updateError,
    loading: updateLoading,
  } = useUpdateStudent();
  const {
    postStudent,
    error: createError,
    loading: createLoading,
  } = usePostStudent();

  useEffect(() => {
    async function fetchData() {
      try {
        if (id) {
          const response = await fetch(`/api/students/${id}`);
          const data = await response.json();
          setStudent(data);
        }
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    }

    fetchData();
  }, [id]);

  const initialValues = {
    code: student ? student.code : '',
    name: student ? student.name : '',
    last_name: student ? student.last_name : '',
    sex: student ? student.sex : '',
    birthday: student ? new Date(student.birthday).toJSON().slice(0, 10) : '',
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      if (id) {
        const success = await updateStudent(id, values);
        if (success) {
          navigate('/');
        }
      } else {
        const success = await postStudent(values);
        if (success) {
          navigate('/');
        }
      }
      setSubmitting(false);
    },
  });

  if (!student && id) return <Loading />;

  return (
    <FormikProvider value={formik}>
      <div className="edit-student">
        <h2>{id ? 'Editar Estudiante' : 'Add Student'}</h2>
        <Form onSubmit={formik.handleSubmit}>
          <Input label="Code" name="code" disabled={id} />
          <Input label="Name" name="name" />
          <Input label="Last Name" name="last_name" />
          <Select label="Sex" name="sex" options={SEX_OPTIONS} />
          <Input label="Birthday" name="birthday" type="date" />
          <button type="submit" disabled={formik.isSubmitting}>
            {id ? 'Save Changes' : 'Add'}
          </button>
        </Form>
      </div>
    </FormikProvider>
  );
}

export default StudentForm;
