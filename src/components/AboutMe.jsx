import React from 'react'

const AboutMe = () => {
  return (
    <div className='container py5'>
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className='profile-image' src="https://source.unsplash.com/random" alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p className='p-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quos laudantium aliquam veritatis tempore itaque et, expedita provident libero magnam architecto facilis ullam? Odit harum quam, nulla alias expedita tenetur magnam similique veniam, voluptatibus placeat ratione vel. Atque, deleniti officiis sapiente, quasi mollitia adipisci ut nostrum harum, maxime nisi neque.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe