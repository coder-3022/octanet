import React from 'react'

const Collection = () => {
  return (
    <div>
     <section id="collections">
      <div className="title title-right">
        <span className="line line-right" /><h3>Collections</h3>
      </div>
      <div className="wrapper">
        <a className="box box1" href="/">
          <h4>Moisturizers</h4>
          <div className="box-overlay" />
        </a>
        <a className="box box2" href="/">
          <h4>Eye &amp; Lip Care</h4>
          <div className="box-overlay" />
        </a>
        <a className="box box3" href="/">
          <h4>Cleansers &amp; Toners</h4>
          <div className="box-overlay" />
        </a>
      </div>
    </section>  
    </div>
  )
}

export default Collection
