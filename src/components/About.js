import React from 'react'

const About = () => {
  return (
    <div>
         <section id="about">
      <div className="title title-left">
        <span className="line" /><h3>PIXEL Skincare</h3>
      </div>
      <div className="wrapper">
        <div className="text">
          <p>Since 2016, Pixel Skin Care has been at the forefront of the move towards organic and natural skincare.</p>
          <p>Specialising in emerging niche natural skin care brands, Pixel Skin Care is a safe zone for you and your skin where we have taken special care to hand pick and offer you some of the purest and safest brands from global organic specialists.</p>
          <p>From cutting edge science to luxurious natural indulgence, we have selected the best products and treatments for healing and improving your well-being.</p>
        </div>
        <div className="video-wrapper">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/otej7WLdPh0" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
