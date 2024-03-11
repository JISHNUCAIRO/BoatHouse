import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react'; 
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
      .min(6, 'Password must be at least 6 characters')
      .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, 'Password must contain at least one letter, one number, and one special character'),
  });

  const [loginError, setLoginError] = useState(null); 

  const handleLogin = (values, { setSubmitting }) => {
    if (validationSchema.isValidSync(values)) {
    
      console.log('Admin login with username:', values.username, 'and password:', values.password);
      
      setLoginError('Invalid username or password. Please try again.'); 
    }
    setSubmitting(false); 
  };

  return (
    <div className="admin-login-form">
      <h2>Admin Login</h2>
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
            {loginError && <div className="alert alert-danger">{loginError}</div>} 
            <Link to='/adh'><button type="submit" className="btn btn-primary" disabled={isSubmitting}>Login</button></Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminLogin;
