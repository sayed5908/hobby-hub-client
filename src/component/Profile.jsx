import React, { use, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';

const Profile = () => {
    const users = useLoaderData();
    // const [users, setUsers] = useState(initialUser);
    const {user, setUser} = use(AuthContext);
    

    if(user){
        console.log(user.email); //user logged in
    }

    const loggedInUser = users.find( singleUser => singleUser.email === user?.email)
    setUser(loggedInUser);

     useEffect(() => {
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, [loggedInUser, setUser]);

   
    return (
        <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 flex items-center gap-6">
      <img
        src={loggedInUser?.url}
        alt="profile"
        className="w-24 h-24 rounded-full object-cover border"
      />

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          {loggedInUser?.name}
        </h1>

        <p className="text-gray-500 mt-1">
          {loggedInUser?.email}
        </p>

       
      </div>
    </section>
    );
};

export default Profile;