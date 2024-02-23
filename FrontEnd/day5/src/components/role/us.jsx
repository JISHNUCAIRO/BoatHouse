import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const [loginError, setLoginError] = useState(null); // State to track login errors

  const handleLogin = (values, { setSubmitting }) => {
    if (validationSchema.isValidSync(values)) {
      // If form is valid, perform login action
      console.log('User login with username:', values.username, 'and password:', values.password);
      // Here, you would typically make a request to your backend to authenticate the user
      // For demonstration purposes, I'll just set an error to simulate failed login
      setLoginError('Invalid username or password. Please try again.'); // Set error message
    }
    setSubmitting(false); // Make sure to set submitting state to false
  };

  return (
    <div className="user-login-form">
      <h2>User Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className="form-group">
              <Field type="text" name="username" placeholder="Username" className={`form-control ${errors.username && touched.username ? 'is-invalid' : ''}`} />
              <ErrorMessage name="username" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <Field type="password" name="password" placeholder="Password" className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`} />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>
            {loginError && <div className="alert alert-danger">{loginError}</div>} {/* Display login error message */}
           <Link to ='/home'> <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Login</button> </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserLogin;
