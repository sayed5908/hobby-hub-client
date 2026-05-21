import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {
  const {createUser} = useContext(AuthContext);

    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(name, email, password);

        //create user in firebase 

        createUser(email, password)
        .then(result => {
          console.log(result.user);

          const userProfile = {
            email, name,
            creationTime : result.user?.metadata?.creationTime,
            lastSignInTime : result.user?.metadata?.lastSignInTime
          }

          //save profile info in database

          fetch('http://localhost:3000/users', {
            method: 'POST',
            headers : {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(userProfile)
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
          })

        })
        .catch(error =>{
          console.log(error);
        })

    
    }
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
          <div><a className="link link-hover">Forgot password?</a></div>

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