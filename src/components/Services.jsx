import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faDesktop, faFileCode} from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div className='services'>
       <h1 className="py-5">Our Services</h1>
       <div className="container">
          <div className="row">

             <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="box">
                   <div className="circle">
                      <FontAwesomeIcon icon={faGoogle} size="2x" className='icon' />
                   </div>
                   <h2>SEO</h2>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, in!</p>
                </div>
             </div>
             
             <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="box">
                   <div className="circle">
                      <FontAwesomeIcon icon={faFacebookF} size="2x" className='icon' />
                   </div>
                   <h2>SMM</h2>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, in!</p>
                </div>
             </div>

             <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="box">
                   <div className="circle">
                      <FontAwesomeIcon icon={faDesktop} size="2x" className='icon' />
                   </div>
                   <h2>IT</h2>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, in!</p>
                </div>
             </div>

             <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="box">
                   <div className="circle">
                      <FontAwesomeIcon icon={faFileCode} size="2x" className='icon' />
                   </div>
                   <h2>Web Development</h2>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, in!</p>
                </div>
             </div> 
          </div>
       </div>
    </div>
  )
}

export default Services