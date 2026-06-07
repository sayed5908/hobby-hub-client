import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link, useLoaderData } from 'react-router';
import { FaRegEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyGroups = () => {
  const { user } = use(AuthContext);

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
        fetch(`https://hobby-hub-server-with-auth.vercel.app/groups/${id}`, {
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
    <div className="max-w-7xl mx-auto px-2 md:px-4 mt-10">

      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        My Groups
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg">

        <table className="table table-zebra w-full">

          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Group Name</th>

              <th className="hidden md:table-cell">
                Category
              </th>

              <th className="hidden lg:table-cell">
                Members
              </th>

              <th className="hidden lg:table-cell">
                Location
              </th>

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
                    className="w-12 h-12 md:w-16 md:h-16 rounded object-cover"
                  />
                </td>

                <td>
                  <div className="font-semibold">
                    {group.name}
                  </div>

                  {/* Show category under name on mobile */}
                  <div className="md:hidden text-xs text-gray-500 mt-1">
                    {group.category}
                  </div>
                </td>

                <td className="hidden md:table-cell">
                  <span className="badge badge-primary">
                    {group.category}
                  </span>
                </td>

                <td className="hidden lg:table-cell">
                  {group.members}
                </td>

                <td className="hidden lg:table-cell">
                  {group.location}
                </td>

                <td>
                  <div className="flex flex-col md:flex-row gap-2">

                    <Link
                      to={`/updateGroup/${group._id}`}
                      className="btn btn-info btn-xs md:btn-sm"
                    >
                      Update <FaRegEdit />
                    </Link>

                    <button
                      onClick={() => handleDelete(group._id)}
                      className="btn btn-error btn-xs md:btn-sm"
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default MyGroups;