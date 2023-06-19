import React from 'react'
import './contact.css'

export default function contact() {
  return (
    <div>
      <section id="contact" className='pt-5'>
        <div className='container'> 
          <h2>Stay Connected</h2>
          <p className="mb-0">
                  <small>Gurugaon,Haryana,India</small>
              </p>
              <a href="mailto:kaifqureshi220@gmail.com" className="m-0 text-white" style={{fontSize:20}}>
                  <strong>kaifqureshi220@gmail.com</strong>
              </a>
              <p>(+91)8126257350</p>
              <div className="nav-icon py-3">
                  <a href="https://www.linkedin.com/in/mohammad-kaif-qureshi-871802208/" target="_blank" rel="noreferrer" className="text-white w-5 p-2">
                      <i className="fab fa-linkedin"></i></a>
                  <a href="https://www.facebook.com/kaif.qureshi.376" target="_blank" rel="noreferrer" className="text-white w-3 p-2">
                      <i className="fab fa-facebook"></i></a>
                  <a href="https://www.instagram.com/kaifqureshi220/" target="_blank" rel="noreferrer" className="text-white w-5 p-2">
                      <i className="fab fa-instagram"></i></a>
                  <a href="https://github.com/kaif220" target="_blank" rel="noreferrer" className="text-white w-5 p-2">
                      <i className="fab fa-github"></i></a>
              </div>
        </div>
      </section>
    </div>
  )
}
