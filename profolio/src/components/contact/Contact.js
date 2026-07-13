import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const celebrateSubmission = async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const { default: confetti } = await import('canvas-confetti');
  const colors = ['#22c55e', '#4ade80', '#ffffff', '#facc15'];
  const defaults = {
    colors,
    disableForReducedMotion: true,
    ticks: 220,
    zIndex: 1000,
  };

  // Wave 1: focused center burst.
  confetti({ ...defaults, particleCount: 90, spread: 75, startVelocity: 42, origin: { x: 0.5, y: 0.58 } });

  // Wave 2: matching bursts from both lower corners.
  window.setTimeout(() => {
    confetti({ ...defaults, particleCount: 55, angle: 60, spread: 60, startVelocity: 48, origin: { x: 0, y: 0.7 } });
    confetti({ ...defaults, particleCount: 55, angle: 120, spread: 60, startVelocity: 48, origin: { x: 1, y: 0.7 } });
  }, 500);

  // Wave 3: a soft finishing shower across the page.
  window.setTimeout(() => {
    confetti({ ...defaults, particleCount: 110, spread: 120, startVelocity: 30, gravity: 0.8, origin: { x: 0.5, y: 0.15 } });
  }, 1050);
};

const Contact = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSending, setIsSending] = useState(false);

  const emailValidation = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  };

  const updateField = (setter) => (event) => {
    setter(event.target.value);
    if (errMsg) setErrMsg('');
    if (successMsg) setSuccessMsg('');
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    if (username.trim() === '') {
      setErrMsg('Username is required!');
    } else if (phoneNumber.trim() === '') {
      setErrMsg('Phone number is required!');
    } else if (email.trim() === '') {
      setErrMsg('Please give your Email!');
    } else if (!emailValidation(email)) {
      setErrMsg('Give a valid Email!');
    } else if (subject.trim() === '') {
      setErrMsg('Please give your Subject!');
    } else if (message.trim() === '') {
      setErrMsg('Message is required!');
    } else {
      setErrMsg('');
      setIsSending(true);

      try {
        const response = await fetch('https://formsubmit.co/ajax/bagenigilbert@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: username.trim(),
            email: email.trim(),
            phone: phoneNumber.trim(),
            subject: subject.trim(),
            message: message.trim(),
            _subject: `New portfolio message: ${subject.trim()}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        const result = await response.json();
        if (!response.ok || result.success === false) {
          throw new Error(result.message || 'Message delivery failed.');
        }

        setSuccessMsg('Thank you! Your message has been sent successfully.');
        celebrateSubmission();
        setUsername('');
        setPhoneNumber('');
        setEmail('');
        setSubject('');
        setMessage('');
      } catch (error) {
        setErrMsg('Your message could not be sent. Please try again or email me directly.');
      } finally {
        setIsSending(false);
      }
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
                    onChange={updateField(setUsername)}
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
                    onChange={updateField(setPhoneNumber)}
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
                  onChange={updateField(setEmail)}
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
                  onChange={updateField(setSubject)}
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
                  onChange={updateField(setMessage)}
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
                  disabled={isSending}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-100 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent transition duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? 'Sending…' : 'Send Message'}
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
