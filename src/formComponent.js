import axios from 'axios';
import React, { useState } from 'react';

export default function FormComponent() {

    const [data, setFormdata] = useState({
        name: '',
        email: '',
        phone: '',
        date:'',
        password:''
    });

    const handleInput = (e) => {
        setFormdata({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log("submitted data",data)
        try {
          await axios.post('http://localhost:8080/add', data);
          
            console.log("Formdata added to db")
          
        } catch (error) {
          console.log('Error:', error.message);
        }
      };
      const inputStyle = 'rounded-xl text-center py-2 w-[100%] lg:w-[100%] mb-3 text-black border-none mt-2 px-20 hover:border-none'
    return (
        <div className=' h-screen justify-center flex items-center bg-[#E8D8C4]'>
            
            <div className='bg-[#6D2932] w-[90%] md:w-[80%] h-[90%] lg:w-[40%] justify-center flex items-center flex-col gap-8 rounded-xl shadow-lg'>
            <div className='border-2 border-[#E8D8C4] p-3 rounded-xl cursor-none w-[70%] md:w-[60%] lg:w-[70%] text-center'>
                <p className='text-2xl bg-[#E8D8C4] rounded-lg text-[#6D2932] py-1'>Registration Form</p>
            </div>
            <div className='flex items-center justify-center'>
            <form onSubmit={handleSubmit}>
               <div>
               <p>Name :</p>
                <p><input className={inputStyle} type='text' name="name" id="name" required value={data.name} onChange={handleInput} placeholder="Enter your Name" /></p>
                <p>Email :</p>
                <input className={inputStyle} type="email" name="email" id="email" required value={data.email} onChange={handleInput} placeholder="Enter Your Email" />
                <p>Phone :</p>
                <input className={inputStyle} type="tel" name="phone" id="phone" required value={data.phone} onChange={handleInput} placeholder="Enter Phone Number" />
                <p>Date Of Birth:</p>
                <input className={inputStyle} type='date' name="date" required value={data.date} onChange={handleInput} placeholder='Enter Your date of Birth'/>
                <p>Enter a password:</p>
                <input className={inputStyle} type='password' required name='password' value={data.password} onChange={handleInput}/>
                <p><input type='checkbox' name='checkbox'/> Accept terms & conditions</p>
               </div>
                <div className='flex items-center justify-center mt-4 '>
                <button className='bg-[#E8D8C4] text-[#6D2932] p-4 w-[100%] rounded-lg shadow-xl hover:bg-gradient-to-t from-[#E8D8C4] to-[#dfa11cec] ease-out duration-600 ' type="submit">Ｓｕｂｍｉｔ</button>
                </div>
            </form>
            
            </div>
            
            </div>
        </div>
    );
}