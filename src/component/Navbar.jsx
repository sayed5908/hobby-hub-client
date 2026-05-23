import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';

const Navbar = () => {
    const {user, logOut} = use(AuthContext)

    const handleLogOut = () =>{
        logOut().then(() =>{
            alert("logged out successfully")
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    return (
        <div className="flex justify-between items-center py-2 px-5 bg-base-100 shadow-sm">
            
            {/* Logo */}
            <div>
                <img
                    className="w-14"
                    src="https://i.ibb.co.com/d4x7841w/tyurytj.png"
                    alt="Logo"
                />
            </div>
            <div>{user && user.email}</div>
            <div className='space-x-4'>
                <Link to={'/'} className='btn btn-ghost'>Home</Link>
                <button className='btn btn-ghost'>All Groups</button>
                <Link to={'/creategroup'} className='btn btn-ghost'>Create Groups</Link>
                <button className='btn btn-ghost'>My Groups</button>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
                {
                    user ? (<button onClick={handleLogOut} className="btn">LogOut</button>) : (<Link to={'/login'} className="btn">Sign In</Link>)
                }
              

                <img
                    className="w-10 h-10 rounded-full"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="User"
                />
            </div>
        </div>
    );
};

export default Navbar;