import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div >
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight" style={{backgroundColor:'#8f94fb'}}>
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/MyCamera.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Efemena Onomarho</a></h1>
              <span className="email" style={{color:'#fff'}}><i className="icon-mail"></i> onomarhoe@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#about" data-nav-section="blog">Portfolio</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/efemena.onomarho" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/efemena30" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
              © Copyright 2020 Efemena   
              
              </small></p>
  
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
