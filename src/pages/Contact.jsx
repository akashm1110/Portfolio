import React, { useRef, useState } from 'react'

import emailjs from "@emailjs/browser"


 import  useAlert from "../hooks/useAlert"


import Alert from '../components/Alert';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");


  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs.send("service_k690j6x" , "template_xcn95jn" ,{
      from_name : form.name,
      to_name : "Akash M",

      from_email : form.email,
      to_email : "akashsanjay1626@gmail.com",

      message : form.message
      
    } ,"oe2FuJDNUf5y3-Hl3").then (()=>{
      setLoading(false);
      showAlert({
        show: true,
        text : "Thank you for your message ",
        type : "success",
      });

      setTimeout(()=>{
        hideAlert(false);
        setCurrentAnimation("idle");
        setForm({
          name:"",
          email:"",
          message : "",
        });
      }, [3000]);

    },
    (error)=>{
      setLoading(false);
      console.error(error);
      setCurrentAnimation("idle");
      showAlert({
        show:true,
        text : "I didn't receive your message",
        type : 'danger'
      })
    })

    
  };
   
  return (
    <section className='relative flex lg:flex-row flex-col max-container '>

      {alert.show && <Alert {...alert}/>}
      <div className='flex-1 min-w-[50%] flex flex-col' >
        <h1 className='head-text'>Get in Touch</h1>
        <form 
        ref={formRef}
         onSubmit={handleSubmit} 
         className='w-full  flex flex-col gap-7 mt-14'>
            <label className='text-black-500 font-semibold'>Name
            <input 
            type="text"
            name ="name"
            className='input'
            placeholder='Akash'
            required value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}

            />
            </label>
            <label className='text-black-500 font-semibold'>Email
            <input 
            type="email"
            name ="email"
            className='input'
            placeholder='akash@gmail.com'
            required value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}

            />
            </label>
            <label className='text-black-500 font-semibold'>Your Message
            <textarea 
            name='message'
            rows='4'
            className='textarea'
            placeholder='Write your thoughts here...'
            required value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}

            />
            </label>
            <button 
            type='submit'
             className='btn' 
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleBlur}> 
              {loading ? "Sending..." : "Submit"}
            </button>
        </form>
      </div>

      {/* HERE CHANGED */}
    </section>
  )
}

export default Contact