import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai';
//import Member from './Member';

function Home() {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [Members,setMembers] = useState(false);

    const handleDelete = (id) => {
      localStorage.removeItem(id)
      window.location.reload()
    }
  useEffect(() => {
    const storedData = localStorage.getItem('registrationData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setRegisteredUsers(parsedData);
      setMembers(true);
    }else{
      setMembers(false);
    }
  }, []);
  return (
    <div>
        <div>
        <Link to="/Create">
            <button>Add member</button>
        </Link>
        </div>
        <br />
        
        {registeredUsers.map(user => {
          return(
          <div>
          {user.image && <img src={''} alt="userprofileImage" />}
          <img src={''} alt=""/>
          <div>
              <p>
                  <span>{user.firstName} </span>
                  <br />
                  <span>{user.jobTitle}</span>
              </p>
          </div>
          <div>
            <Link to={`/edit/${user.id}`}><AiOutlineEdit size={30}/></Link>
            <button onClick={() => handleDelete (`${registeredUsers}`)}><AiOutlineDelete size={30}/></button>
        </div>
        
    
      {!Members && (<h5>Add Member</h5>)}
        </div>
          );
        })}
        
    </div>
  
  )
}

export default Home