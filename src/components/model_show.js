import React, { Component } from 'react';

class ModelShow extends Component {

  render() {
    return (
      <div className="background-card">
        <div className="show-card">
          <iframe className="img-show" title={this.props.data.name} src={this.props.data.embedUrl}/>
          <div className="show-card-info">
            <div className="col1">
              <h4>{this.props.data.name}</h4>
              <p>{this.props.data.description}</p>
            </div>
            <div className="col2">
              <span>By <a href={this.props.data.user.profileUrl}>{this.props.data.user.displayName}</a></span>
              <img src={this.props.data.user.avatar.images[0].url} alt="avatar"></img>
            </div>
          </div>
        </div>
       </div>
    );
  }
}

export { ModelShow };
