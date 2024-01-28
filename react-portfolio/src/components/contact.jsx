import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // If validation passes, reset error state
    setError('');

    // Perform the actual submission (POST request)
    try {
      const response = await fetch('https://getform.io/f/983727c2-319a-4857-b4a5-664bc04c4cec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission, e.g., show a success message
        console.log('Form submitted successfully');
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        // Handle error response from the server
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle any network or other errors
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div>
      <div className='flex flex-col mb-10 mx-auto'>
        <div className='flex justify-center items-center h-screen'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col w-full md:w-7/12'
          >
            <h1 className='text-4xl mt-8 mb-4'>Contact</h1>
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type='text'
              name='email'
              placeholder='Email Address'
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name='message'
              id='message'
              rows='10'
              placeholder='Message'
              className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
              value={formData.message}
              onChange={handleChange}
            />
            {error && <p className='text-red-500'>{error}</p>}
            {success && <p className='text-green-500'>Form submitted successfully!</p>}
            <button
              type='submit'
              className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-orange-600 drop-shadow-md'
            >
              Let's get in touch!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
