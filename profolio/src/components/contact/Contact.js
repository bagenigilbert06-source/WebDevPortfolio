import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = () => {
    return String(email).toLocaleLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === '') {
      setErrMsg('Username is required!');
    } else if (phoneNumber === '') {
      setErrMsg('Phone number is required!');
    } else if (email === '') {
      setErrMsg('Please give your Email!');
    } else if (!emailValidation(email)) {
      setErrMsg('Give a valid Email!');
    } else if (subject === '') {
      setErrMsg('Please give your Subject!');
    } else if (message === '') {
      setErrMsg('Message is required!');
    } else {
      const emailSubject = encodeURIComponent(`${subject} — from ${username}`);
      const emailBody = encodeURIComponent(`${message}\n\nFrom: ${username}\nEmail: ${email}\nPhone: ${phoneNumber}`);
      window.location.href = `mailto:bagenigilbert@gmail.com?subject=${emailSubject}&body=${emailBody}`;
      setSuccessMsg('Your email draft is ready to send.');
      setErrMsg('');
      setUsername('');
      setPhoneNumber('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Contact" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form onSubmit={handleSend} noValidate className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p role="alert" className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p role="status" className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-100 uppercase tracking-wide">Your name</p>
                  <input
                    id="username"
                    name="name"
                    autoComplete="name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === 'Username is required!' && 'outline-designColor focus:ring focus:border-designColor transition duration-300'
                    } contactInput bg-[#141518] text-white px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-designColor`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-100 uppercase tracking-wide">Phone Number</p>
                  <input
                    id="phoneNumber"
                    name="phone"
                    autoComplete="tel"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === 'Phone number is required!' && 'outline-designColor focus:ring focus:border-designColor transition duration-300'
                    } contactInput bg-[#141518] text-white px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-designColor`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-100 uppercase tracking-wide">Email</p>
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === 'Please give your Email!' && 'outline-designColor focus:ring focus:border-designColor transition duration-300'
                  } contactInput bg-[#141518] text-white px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-designColor`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-100 uppercase tracking-wide">Subject</p>
                <input
                  id="subject"
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === 'Please give your Subject!' && 'outline-designColor focus:ring focus:border-designColor transition duration-300'
                  } contactInput bg-[#141518] text-white px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-designColor`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-100 uppercase tracking-wide">Message</p>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === 'Message is required!' && 'outline-designColor focus:ring focus:border-designColor transition duration-300'
                  } contactTextArea bg-[#141518] text-white px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-designColor`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-100 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
