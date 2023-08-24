
import {MdOutlineEmail} from 'react-icons/md';
import { LiaLinkedin } from 'react-icons/lia';
import { BsWhatsapp } from 'react-icons/bs';
import React, {useRef} from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
const Contact = () => {
   const form =useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_esd1cxf', 'template_g9rlf6a', form.current, 'yzUOWwprLw466nOCk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>payaljangra115588@gmail.com</h5>
            <a href='mailto:payaljangra115588@gmail.com' target='_blank'>Send a mail here</a>
          </article>

          <article className='contact__option'>
            <LiaLinkedin className='contact__option-icon'/>
            <h4>Linkedin </h4>
            <h5>/payaljangra</h5>
            <a href='https://www.linkedin.com/in/payaljangra/' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href='https://api.watsapp.com/send?phone+9994939393' target='_blank'>Send a message</a>
          </article>
        </div>

        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submint' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
