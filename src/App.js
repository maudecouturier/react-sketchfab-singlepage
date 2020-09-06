import React, { Component } from 'react';
import './App.css';
import { Model } from './components/model.js'
import { Button } from './components/button.js'
import { Navbar } from './components/navbar.js'
import { ModelShow } from './components/model_show.js'

const HEADERS = { headers: { Authorization: `token ${process.env.REACT_APP_API_TOKEN}`}}
const MY_MODELS_URL = 'https://api.sketchfab.com/v3/me/models'
const LIKED_MODELS_URL = 'https://api.sketchfab.com/v3/me/likes'

class App extends Component {

  state = {
    currentModel: null,
    showCurrentModel: false,
    results: [],
  }

  componentDidMount() {
    this.getModels(MY_MODELS_URL);
  }

// changed here
  getModels = (url) => {
    fetch(url, HEADERS)
    .then(response => response.json())
    .then((data) => {
      console.log(data.results)
      this.setState({
        currentModel: null,
        showCurrentModel: false,
        results: data.results,
      })
    })
    .catch(console.log)
  }

  // changed here
  displaySelectedModel = (model) => {
    this.setState({
      showCurrentModel: true,
      currentModel: model,
    })
  }


  render() {
    return (
      <div className="page">
        <Navbar/>
        <div className="content-wrapper">
          <div className="button-bar">
            <Button text="My models" callApi={() => this.getModels(MY_MODELS_URL)} />
            <Button text="Liked" callApi={() => this.getModels(LIKED_MODELS_URL)} />
          </div>
          { !this.state.showCurrentModel &&
            <div className="models-grid">
              {this.state.results.map(model => <Model key={model.uid} data={model} showModel={() => this.displaySelectedModel(model)} />)}
            </div>
          }
          { this.state.showCurrentModel && this.state.currentModel &&
            <div>
              <ModelShow data={this.state.currentModel}/>
            </div>
          }
        </div>
      </div>
    );
  }


}

export default App;
