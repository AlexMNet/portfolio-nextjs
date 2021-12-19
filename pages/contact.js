import React, { useState } from 'react';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onChange = (value) => {
    console.log('Captcha value:', value);
  };

  //Form validation State
  const [errors, setErrors] = useState({});

  //Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send');

  //Setting success of failure message states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showfailureMessage, setShowfailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //form validation
    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('sending');

      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email,
          fullname,
          subject,
          message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowfailureMessage(true);
        setButtonText('Send');
        return;
      }
      setShowSuccessMessage(true);
      setShowfailureMessage(false);
      setButtonText('Send');
      setTimeout(function () {
        setShowSuccessMessage(false);
      }, 3000);
      // Reset input state
      setFullname('');
      setEmail('');
      setMessage('');
      setSubject('');
      console.log(fullname, email, subject, message);
    }
  };

  return (
    <div className='container mx-auto text-center'>
      {/* Header */}
      <div className='text-gray-800 dark:text-gray-300 max-w-lg mx-auto px-5'>
        <h1 className='text-6xl'>Contact</h1>
        <p className='text-gray-400'>
          Lets talk about my projects! Send me a message and I will respond as
          soon as I can.
        </p>
      </div>
      {/* FORM */}
      <div className='p-10 mb-10'>
        <form
          onSubmit={handleSubmit}
          className='rounded-lg shadow-xl flex flex-col px-8 py-8 max-w-xl mx-auto bg-white dark:bg-gray-800'
        >
          <h1 className='text-2xl font-bold dark:text-gray-50'>
            Send a message
          </h1>
          <div className='mx-auto mt-5'>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onChange}
              size='compact'
            />
          </div>
          <div className='relative mt-8'>
            <input
              id='fullname'
              type='text'
              name='fullname'
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className='peer text-lg h-10 placeholder-transparent w-full rounded-none  bg-transparent border-b  py-2 focus:outline-none text-gray-900'
              placeholder='Full name'
            />
            <label
              htmlFor='fullname'
              className='absolute transition-all left-0 -top-3.5 text-left text-gray-600 text-sm dark:text-gray-50 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
            >
              Full name
              {!fullname && <span className='text-red-500 text-xl'> *</span>}
            </label>
            {/* Error message name */}
            {errors.fullname && (
              <p className='text-xs mt-1 text-red-500'>
                Must Provide Full Name
              </p>
            )}
          </div>
          <div className='relative mt-8'>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='peer text-lg h-10 placeholder-transparent w-full rounded-none  bg-transparent border-b  py-2  focus:outline-none text-gray-900'
              placeholder='E-mail'
            />
            <label
              htmlFor='email'
              className='absolute transition-all left-0 -top-3.5 text-left text-gray-600 text-sm dark:text-gray-50 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
            >
              E-mail{!email && <span className='text-red-500 text-xl'> *</span>}
            </label>

            {/* Error message name */}
            {errors.email && (
              <p className='text-xs mt-1 text-red-500'>Must Provide Email</p>
            )}
          </div>
          <div className='relative mt-8'>
            <input
              type='text'
              id='subject'
              name='subject'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className='peer text-lg h-10 placeholder-transparent w-full rounded-none  bg-transparent border-b  py-2  focus:outline-none text-gray-900'
              placeholder='subject'
            />
            <label
              htmlFor='subject'
              className='absolute transition-all left-0 -top-3.5 text-left text-gray-600 text-sm dark:text-gray-50 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
            >
              Subject
              {!subject && <span className='text-red-500 text-xl'> *</span>}
            </label>
            {errors.subject && (
              <p className='text-xs mt-1 text-red-500'>Must Provide Subject</p>
            )}
          </div>
          <div className='relative mt-8'>
            <textarea
              name='message'
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='peer text-lg h-10 placeholder-transparent w-full rounded-none  bg-transparent border-b  py-2  focus:outline-none  text-gray-900'
              placeholder='message'
            ></textarea>
            <label
              htmlFor='message'
              className='absolute transition-all left-0 -top-3.5 text-left text-gray-600 text-sm dark:text-gray-50 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
            >
              Message
              {!message && <span className='text-red-500 text-xl'> *</span>}
            </label>
            {errors.message && (
              <p className='text-xs mt-1 text-red-500'>
                Must Provide A Message
              </p>
            )}
          </div>

          <div className='flex  justify-center items-center md:items-start  '>
            <button className=' px-10 mt-8 py-2 bg-blue-500 text-gray-50 font-light rounded-md text-lg flex flex-row items-center transition-all duration-150 ease-in-out hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110'>
              {buttonText}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 ml-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </button>
          </div>
          <div className='mt-5'>
            {showSuccessMessage && (
              <p className='text-green-500 font-mono'>
                Thank you! Message Sent!
              </p>
            )}
            {showfailureMessage && (
              <p className='text-red-500 font-mono'>
                Something went wrong. Try again!
              </p>
            )}
          </div>
        </form>
      </div>
      <Link href='/'>
        <a className='text-blue-500 underline hover:text-blue-700'>Back home</a>
      </Link>
    </div>
  );
}
