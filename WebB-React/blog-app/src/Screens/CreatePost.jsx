import React, { useState } from 'react'
import axios from 'axios'

const CreatePost = () => {
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [alert,setAlert]=useState("")
  const [success,setSuccess]=useState("")
  const [error,setError]=useState("")

  const handleSubmit=(e)=>{e.preventDefault();
    if(!title||!description){
      setAlert("Please fill all the fields")
      return
    }
    const post={
      title,description
    }
    axios
     .post("http://localhost:5000/posts",post)
     .then((res)=>{
      console.log("Post Created",res)
      setSuccess("Post Created Successfully")
      setAlert("")
      setError("")
      setTitle("")
      setDescription("")
     })
     .catch((err)=>{
      console.log(err);
      setError("Something went wrong")
      setSuccess("")
      setAlert("")
     })
  }
  return (
    <div>
      <form action="">
        <h1>Create Post</h1>
        <input type="text" placeholder='Enter Post Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea text="text" placeholder='Enter Post Description'value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <button type='submit'  onClick={handleSubmit}>Create Post</button>
        {alert && (<p>{alert}</p>)}
        {success && (<p>{success}</p>)}
        {error && (<p>{error}</p>)}
      </form>
    </div>
  )
}

export default CreatePost