import React, { Component } from 'react';
import { API_URL } from './config'
import BitterList from './BitterList'
import * as BitterServices from './services/bitters'

class App extends Component {
  constructor(props) {
    super(props)
    this.fetchBitters = this.fetchBitters.bind(this);
    this.state = {
      bitters: []
    }
  }
  componentDidMount() {
    this.fetchBitters(API_URL).then(bitters => {
      this.setState({bitters})
    })
  }
  async fetchBitters(url) {
    const bitterData = await fetch(url).then(res => res.json());
    console.log('bitterData: ', bitterData);
    return bitterData;
  }
  render() {
    return (
      <div className="App">
        <BitterList bitters={this.state.bitters} actions={BitterServices} />
      </div>
    );
  }
}

export default App;
