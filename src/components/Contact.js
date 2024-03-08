import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact">
      <div className="wrapper">
        <div className="form-wrapper">    
          <h4>Add More Beauty To Your Email</h4>
          <form id="form" >
            <input type="email" id="email" name="email" placeholder="Your email" required />
            <input type="submit" id="submit" defaultValue="OK" className="submit" />
          </form>
        </div>
        <div className="contact-wrapper">
          <h4>Stay In Touch With PIXEL</h4>
          <div className="wrapper">        
            <ul className="social-menu">
              <li><a href="/"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
              <li><a href="/"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
              <li><a href="/"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              <li><a href="/."><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
            </ul>
            <a className="contact-footer contact-tel" href="/"><i className="fa fa-phone" aria-hidden="true" />001-283-4892</a>
            <a className="contact-footer contact-email" href="/"><i className="fa fa-envelope-o" aria-hidden="true" /></a>
          </div>
        </div>
        <div className="copy-wrapper">
          <h6><i className="fa fa-copyright" aria-hidden="true" /> Theme, Logo, Product Design by <a style={{fontFamily:'cursive' ,fontSize:".6rem"}}>Tushar</a></h6>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact
