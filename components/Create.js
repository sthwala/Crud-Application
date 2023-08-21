// import React from "react";
// import ReactDOM from "react-dom";
// import './App.css';

// function App() {
//   const ImgUpload =({
//     onChange,
//     src
//   })=>
//     <label htmlFor="photo-upload" className="custom-file-upload fas">
//       <div className="img-wrap img-upload" >
//         <img for="photo-upload" src={src}/>
//       </div>
//       <input id="photo-upload" type="file" onChange={onChange}/> 
//     </label>
//     const Name =({
//       onChange,
//       value
//     })=>
//       <div className="field">
//         <label htmlFor="name">
//           name:
//         </label>
//         <input 
//           id="name" 
//           type="text" 
//           onChange={onChange} 
//           maxlength="25" 
//           value={value} 
//           placeholder="Sinothando" 
//           required/>
//       </div>
    
      
//     const Name1 =({
//       onChange,
//       value,
//     })=>
//       <div className="field">
//         <label htmlFor="name1">
//           Job Title:
//         </label>
//         <input  
//           id="name1" 
//           type="text" 
//           onChange={onChange} 
//           maxlength="25" 
//           value={value} 
//           placeholder="Software Engineer" 
//           required/>
//       </div>
    
  
//     const Profile =({
//       onSubmit,
//       src,
//       name,
//       name1,
//     })=>
//       <div className="card">
//         <form onSubmit={onSubmit}>
//           <label className="custom-file-upload fas">
//             <div className="img-wrap" >
//               <img for="photo-upload" src={src}/>
//             </div>
//           </label>
//           <div className="name">{name}</div>
//           <div className="name1">{name1}</div>
//           <div className="photo-uploads">{ImgUpload}</div>
//           <button type="submit" className="edit">Edit Profile </button>
//         </form>
//       </div>
         
//   const Edit =({
//     onSubmit,
//     children,
//   })=>
//     <div className="card">
//       <form onSubmit={onSubmit}>
//           {children}
//         <button type="submit" className="save">Save </button>
//       </form>
//     </div>
  

// class CardProfile extends React.Component {
//   state = {
//     file: '',
//     imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
//     name:'',
//     name1:'',
//     active: 'edit'
//   }
//   photoUpload = e =>{
//     e.preventDefault();
//     const reader = new FileReader();
//     const file = e.target.files[0];
//     reader.onloadend = () => {
//       this.setState({
//         file: file,
//         imagePreviewUrl: reader.result
//       });
//     }
//     reader.readAsDataURL(file);
//   }
//   editName = e =>{
//     const name = e.target.value;
//     this.setState({
//       name,
//     });
//   }

//   editImgUpload = e =>{
//     const src = e.target.value;
//     this.setState({
//       src,
//     });
//   }
  
//   editName1 = e =>{
//     const name1 = e.target.value;
//     this.setState({
//       name1,
//     });
//   }
//   handleSubmit= e =>{
//     e.preventDefault();
//     let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
//     this.setState({
//       active: activeP,
//     })
//   }
  
  
//   render() {
//     const {imagePreviewUrl, 
//             name,
//             name1,
//            active} = this.state;
//     return (
//       <div>
//         {(active === 'edit')?(
          
//           <Edit onSubmit={this.handleSubmit}>
//             <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
//             <Name onChange={this.editName} value={name}/>
//             <Name1 onChange={this.editName1} value={name1}/> 
//           </Edit>
        
//         ):(
//           <Profile 
//             onSubmit={this.handleSubmit} 
//             src={imagePreviewUrl} 
//             name={name} 
//             name1={name1}/>)} 

//       </div>
      
//     )
//   }
// }

// ReactDOM.render(
//   <CardProfile/>,
//   document.getElementById('root')
// )

   
// }



// export default App;
//import Home from ""
//import { useState } from 'react';
import Swal from "sweetalert2"
import { useState } from 'react';


const Create = ({onSave}) => {
    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    const [file, setFile] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text && !text1 && !file) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task and date or close the form!'
            })
        } else if (!text && text1 && file) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task!'
            })
        } else if (text && !text1 && file) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your date!'
            })
        } else if (text && text1 && !file) {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Add Profile picture!'
          }) 
        }
          else {
            onSave({ text, text1, file });
        }
        setText('');
        setText1('');
        setFile();
    }
    function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
    return (
        <form className="add-form" onSubmit={onSubmit}>
          <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
 
        </div>
            <div className="form-control">
                <label>Full Names</label>
                <input type="text" placeholder="fullnames" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Job Title</label>
                <input type="text" placeholder="jobtitle" value={text1} onChange={(e) => setText1(e.target.value)} />
            </div>
            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
      )
  }
  export default Create
  