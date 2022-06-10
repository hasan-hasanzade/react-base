import React,{ useRef } from 'react'
import emailjs from 'emailjs/browser'

const Contactus = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      const serviceID = 'service_cov2g67'
      const templateID = 'template_upymnk5'
      const userID = 'i0sxSUQYMdSXDNnN3'
  
      emailjs.sendForm(serviceID,templateID, form.current, userID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='contact'>
       <div className="text-center">
         <h1>Contact us</h1>
         <p>Please fill out the form</p>
       </div>
         <div className="container">
            <form ref={form} onSubmit={sendEmail}>
               <div className="row">
                  <div className="col-md-6 col-xs-12">
                     <div className="text-center">
                        <input 
                        type="text"
                        className='form-control'
                        placeholder='Name'
                        name='name' />
                        <div className="line"></div>
                     </div>
                     <div className="text-center">
                        <input 
                        type="text"
                        className='form-control'
                        placeholder='Enter your phone number'
                        name='phone' />
                        <div className="line"></div>
                     </div>
                     <div className="text-center">
                        <input 
                        type="email"
                        className='form-control'
                        placeholder='you@example.com'
                        name='email' />
                        <div className="line"></div>
                     </div>
                     <div className="text-center">
                        <input 
                        type="text"
                        className='form-control'
                        placeholder='Enter your text'
                        name='subject' />
                        <div className="line"></div>
                     </div>
                     
                  </div>
                  <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                           <textarea 
                           type="text" 
                           className='form-control'
                           placeholder='Describe your need'
                           name='message'
                           >
                           </textarea>
                           <div className="line"></div>
                        </div>
                        <button type='submit' className='btn-main-offer contact-btn'>Submit</button>
                     </div>
               </div>
            </form>
         </div>
    </div>
  )
}

export default Contactus
