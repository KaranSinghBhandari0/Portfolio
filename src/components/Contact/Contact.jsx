import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const form = document.forms['submit-to-google-sheet'];

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true); // Set submitting state to true

      const email = form['Email'].value.trim();
      const feedback = form['Feedback'].value.trim();

      if (!email || !feedback) {
        toast.error('Please fill in all fields!');
        setIsSubmitting(false); // Reset submitting state
        return;
      }

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzn0443uCG_re3jT7JB20JhYk-nRq2a-6-Tr-IlSi5Z7gTG-23Gf-flqY0JHqu_iTSC/exec', {
          method: 'POST',
          body: new FormData(form),
        });
        if (response.ok) {
          toast.success('Thanks for Your feedback');
          form.reset();
        } else {
          toast.error('Error submitting the form!');
        }
      } catch (error) {
        toast.error('An unexpected error occurred!');
      } finally {
        setIsSubmitting(false); // Reset submitting state
      }
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <div className='contact-div-parent' id='contact'>
      <div className='contact-div' data-aos="zoom-in">
        <div className='my-info'>
          <h1>Contact Me</h1>
          <p><i className="fa-solid fa-envelope" style={{ color: 'orange' }} aria-label="Email"></i> abcd@gmail.com</p>
          <p><i className="fa-solid fa-phone" style={{ color: '#0ff50f' }} aria-label="Phone"></i> 0123456789</p>
          <div className='social-media-icons'>
            <a href="https://www.linkedin.com" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.facebook.com" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.twitter.com" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          </div>
          <br /><br />
        </div>
        <form name='submit-to-google-sheet'>
          <input type="text" id="email" placeholder='e-mail' name='Email' />
          <br /><br />
          <textarea id="feedback" rows={6} cols={50} placeholder='feedback' name='Feedback'></textarea>
          <br /><br />
          <button className='btn' type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
