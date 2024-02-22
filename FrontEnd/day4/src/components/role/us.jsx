import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { Link } from 'react-router-dom';

const UserLogin = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, 'Username must contain at least one number and one special character'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, 'Password must contain at least one number and one special character'),
  });

  const handleLogin = (values) => {
    console.log('User login with username:', values.username, 'and password:', values.password);
  };

  return (
    <div className="user-login-form">
      <h2>User Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <Field type="text" name="username" placeholder="Username" className={`form-control ${errors.username && touched.username ? 'is-invalid' : ''}`} />
              <ErrorMessage name="username" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <Field type="password" name="password" placeholder="Password" className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`} />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserLogin;
