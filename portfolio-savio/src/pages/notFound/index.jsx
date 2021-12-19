import React, { Component } from 'react';
import './not-found.css'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1>Code: 404</h1>
        <h2>Página não encontrada!</h2>
      </div>
    ); 
  }
}

export default NotFound;