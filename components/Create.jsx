import React, { useState } from 'react';
import Navigate  from 'react-navigate';
function Create() {
  const [firstName, setFirstName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [image, setImage] = useState(null);
  const [done,setDone]=useState(false);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleJobTitle = (e) => {
    setJobTitle(e.target.value);
  };

  const handleImage = (e) => {
    const File = e.target.files[0];
    setImage(File);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  const userId = new Date().getTime().toString();

  const storedData = localStorage.getItem('registrationData');
  let existingData = storedData ? JSON.parse(storedData) : [];
  if (!Array.isArray(existingData)) {
    existingData = [];
  }

  const registrationData = {
    id: userId, firstName, jobTitle, image: image ? image.name : null,
  };

  const newData = [...existingData, registrationData];

  localStorage.setItem('registrationData', JSON.stringify(newData));

  console.log(registrationData);
  setFirstName('');
  setJobTitle('');
  setImage(null);
    setDone(true);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="Image"></label>
              <input type="file" id="Image" accept="image/*" onChange={handleImage} />
          </div>
            <div>
              <img src={"Image"} alt="image" />
            </div>
          </div>
          <div>
            <input type="text" id="firstName" value={firstName} onChange={handleFirstName} placeholder='Full Names'/>
          </div>
          <div>
            <input type="text" id="lastName" value={jobTitle} onChange={handleJobTitle} placeholder='Job Title'/>
          </div>
          <div>
            <button className='btn' type="submit">Add Member</button>
          </div>
        </form>
      {done &&(<Navigate to="/"/>)}
    </div>
  )
}

export default Create