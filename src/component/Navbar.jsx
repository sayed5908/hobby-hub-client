import React, { use, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';


const Navbar = () => {
    const { user, setUser, loading, logOut } = use(AuthContext)
    // console.log(user.email);

    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            fetch('http://localhost:3000/users')
                .then(res => res.json())
                .then(data => {
                    // console.log(data.email);
                    const loggedUser = data.find(singleUser => singleUser.email === user?.email)
                    setUser(loggedUser);
                })
        }
    }, [user?.email]);

    const handleLogOut = () => {
        logOut().then(() => {
            let timerInterval;
            Swal.fire({
                title: "Logging Out",
                html: "you will logged out in <b></b> milliseconds.",
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) console.log("I was closed by the timer");
            });
            setUser(null);

        })
            .catch((error) => {
                console.log(error);
            })
        navigate('/login')
    }
    // console.log(user?.url);

    return (
        <div className="flex justify-between items-center py-2 px-5 bg-base-100 sticky top-0 z-50 bg-white shadow-sm">

            {/* Logo */}
            <div>
                <img
                    className="w-14"
                    src="https://i.ibb.co.com/d4x7841w/tyurytj.png"
                    alt="Logo"
                />
            </div>

            <div className='space-x-4'>
                <Link to={'/'} className='btn btn-ghost'>Home</Link>
                <Link to={'/allGroups'} className='btn btn-ghost'>All Groups</Link>
                <Link to={'/creategroup'} className='btn btn-ghost'>Create Groups</Link>
                <Link to={'/myGroups'} className='btn btn-ghost'>My Groups</Link>
            </div>

            <div className="flex items-center gap-4">

                {
                    loading ? (
                        <span>Loading...</span>
                    ) : user ? (
                        <>
                            <Link to="/profile">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src={user?.url}
                                    alt="User"
                                    title={user?.name}
                                />
                            </Link>

                            <button
                                onClick={handleLogOut}
                                className="btn btn-sm btn-primary"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="btn btn-sm">
                            Sign In
                        </Link>
                    )
                }

            </div>
        </div>
    );
};

export default Navbar;