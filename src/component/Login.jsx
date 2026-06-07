import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
// import { AuthContext } from '../Context/AuthContext';

const Login = () => {

  const [errorMessage, setErrorMessage] = useState('');

  const { signInUser, user, setUser } = use(AuthContext);
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  

  const handleSignIn = e => {
    e.preventDefault();
     setErrorMessage('');
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    //firebase sign in send

    signInUser(email, password)
      .then(result => {
        // console.log(result.user);
        navigate(`${location.state ? location.state : '/'}`)
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime
        }

        fetch('https://hobby-hub-server-with-auth.vercel.app/users', {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(signInInfo)
        })
          .then(res => res.json())
          .then(data => {
            // console.log('data after patch', data);
          })
      })
      .catch(error => {
        // console.log(error);

        if (error.code === 'auth/invalid-credential') {
          setErrorMessage('Invalid email or password');
        } else if (error.code === 'auth/wrong-password') {
          setErrorMessage('Wrong password');
        } else if (error.code === 'auth/user-not-found') {
          setErrorMessage('User not found');
        } else {
          setErrorMessage(error.message);
        }
      })

  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className='text-5xl font-semibold text-center pb-10'>Login here</h1>
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>

              <button className="btn btn-neutral mt-4">Login</button>
              <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
              {errorMessage && (
  <p className="text-red-500 mt-2 text-sm">
    {errorMessage}
  </p>
)}
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;