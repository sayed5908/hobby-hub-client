import React, { use, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, setUser, loading, logOut } = use(AuthContext);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (user?.email && !user?.url) {
      fetch('https://hobby-hub-server-with-auth.vercel.app/users')
        .then(res => res.json())
        .then(data => {
          const loggedUser = data.find(
            singleUser => singleUser.email === user.email
          );

          if (loggedUser) {
            setUser(prev => ({
              ...prev,
              name: loggedUser.name,
              url: loggedUser.url,
            }));
          }
        });
    }
  }, [user?.email, user?.url, setUser]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Logged Out Successfully',
          showConfirmButton: false,
          timer: 1500,
        });

        setUser(null);
        navigate('/login');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const navClass = ({ isActive }) =>
    isActive
      ? 'btn btn-primary btn-sm'
      : 'btn btn-ghost btn-sm';

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={navClass}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allGroups"
          className={navClass}
          onClick={() => setIsOpen(false)}
        >
          All Groups
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/creategroup"
          className={navClass}
          onClick={() => setIsOpen(false)}
        >
          Create Groups
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/myGroups"
          className={navClass}
          onClick={() => setIsOpen(false)}
        >
          My Groups
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md px-4">

      {/* Navbar Start */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="relative lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost text-xl"
          >
            ☰
          </button>

          {isOpen && (
            <ul className="menu menu-sm absolute left-0 top-12 z-50 w-52 rounded-box bg-base-100 p-2 shadow-lg">
              {navLinks}
            </ul>
          )}
        </div>

        {/* Logo */}
        <Link to="/">
          <img
            className="w-12 md:w-14"
            src="https://i.ibb.co.com/d4x7841w/tyurytj.png"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {loading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : user ? (
          <div className="flex items-center gap-2 md:gap-4">

            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
            >
              <img
                className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                src={
                  user?.url ||
                  'https://i.ibb.co/4pDNDk1/avatar.png'
                }
                alt="User"
                title={user?.name}
              />
            </Link>

            <button
              onClick={handleLogOut}
              className="btn btn-primary btn-sm"
            >
              Logout
            </button>

          </div>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary btn-sm"
          >
            Sign In
          </Link>
        )}
      </div>

    </div>
  );
};

export default Navbar;