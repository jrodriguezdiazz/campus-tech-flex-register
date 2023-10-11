import * as Yup from 'yup';

const validationSchema = Yup.object({
  code: Yup.string().required('Code is required'),
  name: Yup.string().required('Name is required'),
  last_name: Yup.string().required('Last Name is required'),
  birthday: Yup.string().required('Birthday is required'),
  sex: Yup.string().required('Sex is required'),
});

export default validationSchema;
