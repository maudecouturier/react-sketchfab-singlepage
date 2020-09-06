import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <p className="cstm-button" onClick={this.props.callApi} >
        {this.props.text}
      </p>
    );
  }
}

export { Button };

