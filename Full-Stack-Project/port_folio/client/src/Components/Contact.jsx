import React from "react";
import { useState } from "react";
import axios from "axios"

const Contact = () => {
   const [status,setStatus]=useState("")
   const [failed, setFailed] = useState("");
   const[form,setForm]=useState({
    name:"",
    email:"",
    message:""
   })
   const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value})
   }
   const handleSubmit = async (e) => {
   e.preventDefault();
   const { name, email, message } = form;
   if(!name || !email || !message){
     setFailed("")
     setStatus("")
     return
   }
   const sendmessage={
    name,
    email,
    message,
   }
   axios
     .post("http://localhost:8000/api/messages/send",form)
     .then((res)=>{
        // console.log("Post successfully created:", response.data);
        setStatus("");
        setFailed("");
        setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(()=>{
      setStatus("")
    },2000)
     })
     .catch((err)=>{
        setFailed("Failed");
        setStatus("");
     })
  
   }   
  
   
return (
    <div id="contact" data-aos="zoom-in" data-aos-duration="1500" className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">


    

      
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 
        bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <p className="text-center text-gray-300 mb-10">
          Let’s connect! Feel free to reach out for collaborations or opportunities 
        </p>
        {status && (
          <p className="text-green-500 mb-4 text-center">{status}</p>
        )}
        {failed && <p className="text-red-500 mb-4 text-center">{failed}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
          <input 
            type="text" 
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-cyan-400"
          />

          <input 
            type="email" 
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-cyan-400"
          />

          <textarea 
            placeholder="Your Message"
            name="message"
            onChange={handleChange}
            value={form.message}
            rows="5"
            className="md:col-span-2 p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-cyan-400"
          ></textarea>

          <button 
            type="submit"
            className="md:col-span-2 py-3 rounded-lg font-semibold
            bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400
            hover:scale-105 transition duration-300 active:scale-95 rounded-xl"
          >
            Send Message 
          </button>

        </form>

        {/* Contact Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a href="mailto:routdibyajyoti278@gmail.com" className='bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent text-xl font-bold hover:scale-110 transition duration-400'> Email</a>

          <a href="tel:+919348244578"  className='bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent text-xl font-bold hover:scale-110 transition duration-400' > Call</a>

          <a href="https://wa.me/919348244578" target="_blank" rel="noopener noreferrer" className='bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent text-xl font-bold hover:scale-110 transition duration-400'>
             WhatsApp
          </a>

          <a href="https://www.instagram.com/d_i_b_y_a_a__?igsh=dzJmend6dmlyOThu" target="_blank" rel="noopener noreferrer" className='bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent text-xl font-bold hover:scale-110 transition duration-400'> Instagram
          </a>

        </div>

      </div>
    </div>
  );
};

export default Contact;