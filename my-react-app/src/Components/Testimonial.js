import React from 'react'
import './Testimonial.css'

function Testimonial({ photoUrl, name, testimonial, role }){
    return <>

    <div className='testimonial'>
        <div className='testimonial-photo'>
            <img src={photoUrl} alt={name} />
        </div>
        <div className='testimonial-content'>
            <h2 className='testimonial-name'>{name}</h2>
            <p className='testimonial-text'>{testimonial}</p>
            <p className='testimonial-role'>{role}</p>
        </div>
    </div>
    
    </>
}

export default Testimonial;