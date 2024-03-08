import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header id="header">
      <a className="nav-brand" href="" target="_blank" alt="">
        <img id="header-img" src="https://i.postimg.cc/8czjYqkS/Minimal-Premade-Logos-V02-04.png" alt="Pixel Skincare" />
      </a>
      {/*  Toggle Menu for Mobile  */}
      <input type="checkbox" id="toggle-menu" role="button" />
      <label htmlFor="toggle-menu" className="toggle-menu">Menu</label>
      {/*  Menus  */}
      <nav id="nav-bar" className="navbar">
        <ul className="menu">
          <li><a className="nav-link" href="/">New in!</a></li>
          <li><a className="nav-link" href="/">Collections</a></li>
          <li><a className="nav-link" href="/">About</a></li>
          <li><a className="nav-link" href="/">Contact</a></li>
        </ul>
        <ul className="social-menu">
          <li><a href="/"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
          <li><a href="/"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
          <li><a href="/"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
          <li><a href="/"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
        </ul>
      </nav>
    </header>
    </div>
  )
}
export default Navbar
