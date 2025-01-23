import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {

    useEffect(() => {
        AOS.init({ 
            duration: 1000 
        });
    }, []);

    const { name, setName, email, setEmail, phone, setPhone, message, setMessage, submitting, submitForm } = useContext(AppContext);

  return (
    <div className='bg-[#e5ecfb] min-h-screen pt-16' id='contact'>
        <div className='max-w-5xl mx-auto py-8 px-4 flex flex-col items-center gap-8' data-aos="zoom-in">

            {/* image */}
            <div className='flex gap-4'>
                <i className="fa-solid fa-headset text-[#202020] text-4xl"></i>
                <p className='text-4xl text-[#202020] font-bold'>Get in<span className='text-purple-600'>Touch</span></p>
            </div>

            {/* form */}
            <div className='flex items-center justify-between gap-20 px-8 py-10 bg-white rounded w-full rounded-xl'>
                <img src="/contact.png" alt="" className='hidden md:block md:w-[300px] lg:w-[400px]'/>
                <form action="" className='w-full md:p-6' onSubmit={submitForm}>
                    <div className="relative mb-4">
                        <input 
                            type="text" 
                            className="border border-black bg-[#e5ecfb] outline-purple-600 p-2 rounded pl-10 placeholder-stone-700 w-full" 
                            placeholder="Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <i className="fa-solid fa-user text-stone-700 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                    </div>
                    <div className="relative mb-4">
                        <input 
                            type="email" 
                            className="border border-black bg-[#e5ecfb] outline-purple-600 p-2 rounded pl-10 placeholder-stone-700 w-full" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <i className="fa-solid fa-envelope text-stone-700 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                    </div>
                    <div className="relative mb-4">
                        <input 
                            type="text" 
                            className="border border-black bg-[#e5ecfb] outline-purple-600 p-2 rounded pl-10 placeholder-stone-700 w-full" 
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required 
                        />
                        <i className="fa-solid fa-phone text-stone-700 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                    </div>
                    <div className="relative mb-4">
                        <textarea
                            type="text"
                            className="border border-black bg-[#e5ecfb] outline-purple-600 p-2 rounded pl-10 placeholder-stone-700 w-full"
                            placeholder="Message"
                            rows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <i className="fa-solid fa-comment text-stone-700 absolute left-3 top-4"></i>
                        </div>
                        <button 
                            type="submit" 
                            className=" bg-purple-600 font-semibold font-lg py-3 px-5 text-white rounded-lg shadow-md shadow-[#2506ad] shadow-lg shadow-[rgba(48, 68, 247, 0.6)] transform hover:scale-105 transition-all duration-300 ease-in-out"
                            disabled={submitting}
                            >
                            { submitting ? "......" : "Submit" }
                            <i className="fa-solid fa-paper-plane ml-2 text-white"></i>
                        </button>
                </form>
            </div>
        </div>
    </div>
  )
}
