import React from 'react'
import Typed from 'react-typed'
import Sekil from '../wall.jpg'

const Header = () => {
  return (
    <div className='header-wrapper'>
       <div className="main-info">
          
         <h1>Web development and website services</h1>

         <Typed className='typed-text'
                strings={[
                    'Microsoft Technology Associate',
                    'Microsoft Azure Fundamentals',
                    '88.8% Mern success rate']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>

                <a href={Sekil} className='downloadcv' download>Download CV</a>
       </div>

    </div>
  )
}

export default Header