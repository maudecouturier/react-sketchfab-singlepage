import React, { Component } from 'react';

class Model extends Component {

  render() {
    return (
      <div className="card" onClick={this.props.showModel}>
        <iframe className="card-img" title={this.props.data.name} src={this.props.data.embedUrl}/>
        <div className="card-info">
          <p className="img-title">{this.props.data.name}</p>
          <div className="img-data">
            <i className="fas fa-star"></i>
            <p>{this.props.data.likeCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export { Model };
