import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    const src = "https://static.sketchfab.com/img/press/logos/logo-sketchfab-grey.png"
    return (
      <div className="navbar">
        <img className="logo" src={src} alt="sketchfab-logo"></img>
      </div>
    );
  }
}

export { Navbar };
