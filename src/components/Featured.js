import React from 'react'

const Featured = () => {
  return (
    <div>
       <section id="featured">
      <div className="title title-left">
        <span className="line" /><h3>New Friend!</h3>
      </div>
      <div className="wrapper">
        <div className="image">
          <img src="https://i.postimg.cc/DyM1SgNb/flower-copy.png" alt="Pixel Facial Cream" />
        </div>
        <div className="text">
          <h2>Pixel Facial Cream</h2>
          <p>A lightweight formula that packs a punch with avocado protein extract to strengthen skin's own moisture barrier, sealing in hydration to protect, nourish and soften skin.</p>
          <a href="/" className="btn">Details</a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Featured
