import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../assets/css/adminlogin.css';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Username must be at least 6 characters')
      .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/, 'Password must contain at least one letter and one number, and be at least 6 characters long'),
  });

  const handleLogin = (values) => {
    console.log('Admin login with username:', values.username, 'and password:', values.password);
    // Only proceed with login logic if the form is valid
    if (validationSchema.isValidSync(values)) {
      // Handle login logic here
    }
  };

  return (
    <div className='d'>
      <div className="admin-login-form">
        <h2 className='ah'>Admin Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched, isValid }) => (
            <Form>
              <div className="form-group">
                <Field type="text" name="username" placeholder="Username" className={`form-control ${errors.username && touched.username ? 'is-invalid' : ''}`} />
                <ErrorMessage name="username" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <Field type="password" name="password" placeholder="Password" className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`} />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </div>
              <button type="submit" className="btn btn-primary" disabled={!isValid}>Login</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminLogin;
