import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link, useLoaderData } from 'react-router';
import GroupCard from './GroupCard';
import { FaRegEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyGroups = () => {
    const {user} = use(AuthContext);

    console.log(user.email);

    const groups = useLoaderData();

    const [groupData, setGroupData] = useState(groups);

   const myGroups = groupData.filter(
  group => group.userMail === user?.email
);

   const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to recover this group!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

      fetch(`http://localhost:3000/groups/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {

          if (data.deletedCount > 0) {

            const remaining = groupData.filter(
              group => group._id !== id
            );

            setGroupData(remaining);

            Swal.fire({
              title: "Deleted!",
              text: "Group deleted successfully.",
              icon: "success"
            });
          }
        });
    }
  });
};
    return (
  <div className="overflow-x-auto mt-10">
    <h2 className="text-3xl font-bold text-center mb-6">
      My Groups
    </h2>

    <table className="table table-zebra">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Group Name</th>
          <th>Category</th>
          <th>Members</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {myGroups.map((group, index) => (
          <tr key={group._id}>
            <td>{index + 1}</td>

            <td>
              <img
                src={group.url}
                alt={group.name}
                className="w-16 h-16 rounded object-cover"
              />
            </td>

            <td>{group.name}</td>

            <td>
              <span className="badge badge-primary">
                {group.category}
              </span>
            </td>

            <td>{group.members}</td>

            <td>{group.location}</td>

            <td className="space-x-2">
              <Link
                to={`/updateGroup/${group._id}`}
                className="btn btn-sm btn-info"
              >
                Update Group <FaRegEdit />
              </Link>

              <button onClick={() => handleDelete(group._id)} className="btn btn-error btn-sm">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default MyGroups;