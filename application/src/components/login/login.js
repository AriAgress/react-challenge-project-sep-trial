import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router';
import LoginForm from './login-form/loginForm';
import './login.css';

const Login = props => {
  const token = useSelector(state => state.auth.token);
  const history = useHistory()

  useEffect(() => {
    if (token) {
      history.push('/view-orders');
    }
  }, [token, history]);

  return (
    <div className='main-body'>
      <h1 className='text-center'>Login Screen</h1>
      <div className='d-flex justify-content-center mt-5'>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
