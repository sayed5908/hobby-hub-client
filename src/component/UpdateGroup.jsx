import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateGroup = () => {
    const {_id, name, category, user, userMail, description, location, members, date, url} = useLoaderData();


    const handleUpdateGroups = e => {
        e.preventDefault();
        const form = e.target;
        const formdata = new FormData(form);
        const updateGroup = Object.fromEntries(formdata.entries());
        // console.log(updateGroup);
    
    
        //save data into database
        fetch(`https://hobby-hub-server-with-auth.vercel.app/groups/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateGroup)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount) {
                Swal.fire({
                        title: "Group updated successfully!",
                        icon: "success",
                        draggable: true
                    });
            }
        })
        
      }


    return (
         <div>
      <div className="hero bg-base-200 min-h-screen">

        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className='text-4xl text-center my-2'>Update Group</h1>
            <div className="card-body ">
              <form onSubmit={handleUpdateGroups} className="">
                <label className="label">Group Name</label>
                <input type="text" name='name' className="input"  defaultValue={name} />
                 <label className="label">Category</label>

                <select
                  name="category"
                  className="select select-bordered w-full"
                  defaultValue={category}
                  required
                >
                  <option value="" disabled>
                    Select a Category
                  </option>
                  <option value="Drawing & Painting">Drawing & Painting</option>
                  <option value="Photography">Photography</option>
                  <option value="Video Gaming">Video Gaming</option>
                  <option value="Fishing">Fishing</option>
                  <option value="Running">Running</option>
                  <option value="Music">Music</option>
                  <option value="Tour">Tour</option>
                  <option value="Cooking">Cooking</option>
                  <option value="Reading">Reading</option>
                  <option value="Writing">Writing</option>
                </select>
                <label className="label">Description</label>
                <input type="text" name='description' className="input" defaultValue={description} placeholder="Description" />
                <label className="label">Location</label>
                <input type="text" name='location' className="input" defaultValue={location} placeholder="Location" />
                <label className="label">Members</label>
                <input type="text" name='members' className="input" defaultValue={members} placeholder="Members" />
                <label className="label">Start Date</label>
                <input type="date" name='date' className="input" defaultValue={date} placeholder="Start date" />
                <label className="label">Image URL</label>
                <input type="text" name='url' className="input" defaultValue={url} placeholder="image url" />
                <label className="label">User Name</label>
                <input type="text" name='user' className="input" defaultValue={user} placeholder="user name" />
                <label className="label">User Email</label>
                <input type="email" name='userMail' className="input" defaultValue={userMail} placeholder="user email" />

                <input className='btn mt-5 w-full' type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default UpdateGroup;