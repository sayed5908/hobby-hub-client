import React, { use } from 'react';
import { Link } from 'react-router';
// import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
  const { createUser, setUser } = use(AuthContext);

  const handleSignIn = e => {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  const name = form.name.value;
  const url = form.url.value;

  // Password Validation
  if (password.length < 6) {
    Swal.fire({
      icon: "error",
      title: "Password Error",
      text: "Password must be at least 6 characters long."
    });
    return;
  }

  if (!/[A-Z]/.test(password)) {
    Swal.fire({
      icon: "error",
      title: "Password Error",
      text: "Password must contain at least one uppercase letter."
    });
    return;
  }

  if (!/[a-z]/.test(password)) {
    Swal.fire({
      icon: "error",
      title: "Password Error",
      text: "Password must contain at least one lowercase letter."
    });
    return;
  }

  // Create user in Firebase
  createUser(email, password)
    .then(result => {
      const user = result.user;
      setUser(user);

      const userProfile = {
        email,
        name,
        url,
        creationTime: result.user?.metadata?.creationTime,
        lastSignInTime: result.user?.metadata?.lastSignInTime
      };

      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userProfile)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire({
              title: "Your account has been created successfully",
              icon: "success"
            });
            form.reset();
          }
        });
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message
      });
    });
};
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className='text-3xl font-semibold text-center pb-10'>Register your account</h1>
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="Name" />

              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />

              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />

              <label className="label">Profile URL</label>
              <input type="text" name='url' className="input" placeholder="profile url" />

              <button className="btn btn-neutral mt-4">Register</button>
              <p>Already have an account? <Link to={'/login'}>Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;