import React, { useRef, useState } from 'react';
import icon from '../images/icon.jpg';
import camera from '../images/camera.jpg';
import '../App.css';
import '../css/Landing.css'
import axios from 'axios';
import { PostView } from './PostView';


export const LandingPage = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState("");
  const [likes, setLikes] = useState('');
  const [description, setDescription] = useState('');
  const [PostImage, setPostImage] = useState('');
  const [show, setShow] = useState(true)
  const [showinput, setShowInput] = useState(false)
  let inputRef = useRef();

  const inputFunc = (e) => {
    e.preventDefault();
    inputRef.current.click();
    let file = inputRef.current.files[0];
    if (file) {
      setPostImage(file);
      console.log(file);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !location || !likes || !description || !PostImage) {
      alert("Please Fill all the fields");
      return;
    }

    let formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("likes", likes);
    formData.append("description", description);
    formData.append("image", PostImage);

    try {
      await axios.post("https://instaclone-zeoc.onrender.com/post", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      setName("");
      setLocation("");
      setLikes("");
      setDescription("");
      setPostImage("")
      setShow(true);
      setShowInput(false)
    } catch (error) {
      alert("Failed to upload image")
    }
  }


  return (
    <div className='header'>
      <header>
        <span className='instalogo'><img src={icon} alt='icon10x' ></img></span>
        <span className='heading'><b style={{"color":"#006238"}}>Instaclone</b></span>
        <button className='clogo'><img src={camera} alt='cameraIcon' onClick={() => { setShow(false); setShowInput(true) }}></img></button>
      </header>
      <hr></hr>
      {
        showinput && <main>
          <div className='form'>
          <form onSubmit={handleSubmit}>
            <input id='fileInput' className='inpfile' type='file' name='browser' onChange={inputFunc} ref={inputRef}></input>
            <input type='text' id='fileInput' placeholder='No file choosen' onChange={inputFunc} value={PostImage.name} readOnly></input>
            <button className='labelbtn' onClick={inputFunc}>
              <label htmlFor='fileInput'>Browse</label>
            </button>
            <input type='text'  placeholder='Author' className='forminp same' onChange={(e) => setName(e.target.value)} value={name} />
            <input type='text' placeholder='Location' className='forminp same left1' onChange={(e) => setLocation(e.target.value)} value={location} />
            <input type='text' placeholder='Likes'  className="likes" onChange={(e) => setLikes(e.target.value)} value={likes} />
            <input type='text' placeholder='Description' className='forminp different' onChange={(e) => setDescription(e.target.value)} value={description} />
            <button className="postbtn" type='submit'>Submit</button>
          </form>
          </div>
        </main>
      }
      {show && <PostView />}
    </div>
  )
}
