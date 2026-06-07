import React from 'react';
import Swal from 'sweetalert2';

const CreateGroups = () => {

  const handleCreateGroups = e => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const newGroup = Object.fromEntries(formdata);
    // console.log(newGroup);


    //save data into database
    fetch('https://hobby-hub-server-with-auth.vercel.app/groups', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newGroup)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Your group has created Successfully",
            icon: "success",
            draggable: true
          });
          form.reset();
        }
      })
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">

        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className='text-4xl text-center my-2'>Create Group</h1>
            <div className="card-body ">
              <form onSubmit={handleCreateGroups} className="">
                <label className="label">Group Name</label>
                <input type="text" name='name' className="input" placeholder="Group Name" />
                <label className="label">Category</label>

                <select
                  name="category"
                  className="select select-bordered w-full"
                  defaultValue=""
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
                <input type="text" name='description' className="input" placeholder="Description" />
                <label className="label">Meeting Location</label>
                <input type="text" name='location' className="input" placeholder="Location" />
                <label className="label">Members</label>
                <input type="text" name='members' className="input" placeholder="Members" />
                <label className="label">Start Date</label>
                <input type="date" name='date' className="input" placeholder="Start date" />
                <label className="label">Image URL</label>
                <input type="text" name='url' className="input" placeholder="image url" />
                <label className="label">User Name</label>
                <input type="text" name='user' className="input" placeholder="user name" />
                <label className="label">User Email</label>
                <input type="email" name='userMail' className="input" placeholder="user email" />

                <input className='btn mt-5 w-full' type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroups;