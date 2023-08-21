// import React from 'react';
// // import {useNavigate,} from 'react-router-dom';
// // import {Routes, Route, } from 'react-router-dom';
// //import { Link} from 'react-router-dom';
//  import './App.css';
//  import './Create';
//import { Outlet, Link } from "react-router-dom";
// export default function Home() {
//   return (
//      <div>
//        <Link to="./Create">
//          <button>Add member</button>
//        </Link>
//        <Outlet/>
//     </div>
//   );
//  }



// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <button>
//             <Link to="/Create">Blogs</Link>
//             </button>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;

// Importing Components
// import Home from "./components/Home";
// import Create from "./components/Create";
// import read from "./components/read";
// //import Delete from "./components/Delete";
// import Member from "./components/Member";
// import Header from "./Header"
// import Members from './Members';
// import Create from './Create';

// // Importing React Hooks
// import { useState, useEffect } from 'react';
// // Importing Packages
// import { v4 as uuidv4 } from 'uuid';
// import Swal from "sweetalert2";
// function App() {
//     // All States
//     const [loading, setloading] = useState(true); // Pre-loader before page renders
//     const [members, setMembers] = useState([]); // Task State
//     const [showCreate, setShowCreate] = useState(false); // To reveal add task form
//     const [file, setFile] = useState();
//     // Pre-loader
//     useEffect(() => {
//         setTimeout(() => {
//             setloading(false);
//         }, 3500);
//     }, [])
//     function handleChange(e) {
//       console.log(e.target.files);
//       setFile(URL.createObjectURL(e.target.files[0]));
//   }
//     // Fetching from Local Storage
//     const getMembers = JSON.parse(localStorage.getItem("memberAdded"));
//     useEffect(() => {
//         if (getMembers == null) {
//             setMembers([])
//         } else {
//             setMembers(getMembers);
//         }
//     }, [])
//     // Add Task
//     const addMember = (member) => {
//         const id = uuidv4();
//         const newMember = { id, ...member }
//         setMembers([...members,newMember]);
//         Swal.fire({
//             icon: 'success',
//             title: 'Yay...',
//             text: 'You have successfully added a new task!'
//         })
//         localStorage.setItem("memberAdded", JSON.stringify([...members, newMember]));
//     }
//     // Delete Task
//     const deleteMember = (id) => {
//         const deleteMember = members.filter((member) => member.id !== id);
//         setMembers(deleteMember);
//         Swal.fire({
//             icon: 'success',
//             title: 'Oops...',
//             text: 'You have successfully deleted a task!'
//         })
//         localStorage.setItem("memberAdded", JSON.stringify(deleteMember));
//     }
//     // Edit Task
//     const editMember = (id) => {
//         const text = prompt("Task Name");
//         const day = prompt("Day and Time");
//         let data = JSON.parse(localStorage.getItem('memberAdded'));
//         const myData = data.map(x => {
//             if (x.id === id) {
//                 return {
//                     ...x,
//                     text: text,
//                     day: day,
//                     id: uuidv4()
//                 }
//             }
//             return x;
//         })
//         Swal.fire({
//             icon: 'success',
//             title: 'Yay...',
//             text: 'You have successfully edited an existing task!'
//         })
//         localStorage.setItem("memberAdded", JSON.stringify(myData));
//         window.location.reload();
//     }
//     return (
//         <>
//             {
//                 loading ?
//                     <div className="spinnerContainer">
//                         <div className="spinner-grow text-primary" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                         <div className="spinner-grow text-secondary" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                         <div className="spinner-grow text-success" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                         <div className="spinner-grow text-danger" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                         <div className="spinner-grow text-warning" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                     </div> :
//                     <div className="container">
//                        {/* <Link to="./Create">
//                        <button showForm={() => setShowCreate(!showCreate)} changeTextAndColor={showCreate}>Add member</button>
//                       </Link>
//                     <Outlet/>   */}
//                     {/* App Header that has open and App Name */}
//                   <Header showForm={() => setShowCreate(!showCreate)} changeTextAndColor={showCreate} />
//                         {/* Revealing of Add Task Form */}
//                         {showCreate && <Create onSave={addMember} />}
//                         {/* Task Counter */}
//                         <h3>Number of Members: {members.length}</h3>
//                         {/* Displaying of Tasks */}
//                         {
//                             members.length > 0 ?
//                                 (<Members members={members} onDelete={deleteMember} onEdit={editMember} />) :
//                                 ('No Task Found!')
//                         }
//                     </div>
//             }
//         </>
//     )
// }
// export default App;

import Header from './Header';
import Members from './Members';
import Create from './Create';
// Importing React Hooks
import { useState, useEffect } from 'react';
// Importing Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
function App() {
    // All States
    const [loading, setloading] = useState(true); // Pre-loader before page renders
    const [members, setMembers] = useState([]); // Task State
    const [showCreate, setShowCreate] = useState(false); // To reveal add task form
    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3500);
    }, [])
    // Fetching from Local Storage
    const getMembers = JSON.parse(localStorage.getItem("memberAdded"));
    useEffect(() => {
        if (getMembers == null) {
            setMembers([])
        } else {
            setMembers(getMembers);
        }
    }, [])
    // Add Task
    const addMember = (member) => {
        const id = uuidv4();
        const newMember = { id, ...member }
        setMembers([...Members, newMember]);
        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully added a new Member!'
        })
        localStorage.setItem("memberAdded", JSON.stringify([...members, newMember]));
    }
    // Delete Task
    const deleteMember = (id) => {
        const deleteMember = members.filter((member) => member.id !== id);
        setMembers(deleteMember);
        Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'You have successfully deleted a Members!'
        })
        localStorage.setItem("memberAdded", JSON.stringify(deleteMember));
    }
    // Edit Task
    const editMember = (id) => {
        const text = prompt("Full Name");
        const text1 = prompt("Job Title");
        //const image= prompt("Image");
        let data = JSON.parse(localStorage.getItem('memberAdded'));
        const myData = data.map(x => {
            if (x.id === id) {
                return {
                  
                    ...x,
                    text: text,
                    text1: text1,
                    //image: image,
                    id: uuidv4()
                }
            }
            return x;
        })
        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully edited an existing Member!'
        })
        localStorage.setItem("memberAdded", JSON.stringify(myData));
        window.location.reload();
    }
    return (
        <>
            {
                loading ?
                    <div className="spinnerContainer">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                    <div className="container">
                        {/* App Header that has open and App Name */}
                        <Header showForm={() => setShowCreate(!showCreate)} changeTextAndColor={showCreate} />
                        {/* Revealing of Add Task Form */}
                        {showCreate && <Create onSave={addMember} />}
                        {/* Task Counter */}
                        {/* <h3>Number of Tasks: {tasks.length}</h3> */}
                        {/* Displaying of Tasks */}
                        {
                            members.length > 0 ?
                                (<Members members={members} onDelete={deleteMember} onEdit={editMember} />) :
                                ('No Task Found!')
                        }
                    </div>
            }
        </>
    )
}
export default App;