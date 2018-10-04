import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="wall">
            <Route exact path="/" component={ Home } />
            <Route path="/composition-ii" component={ compositionTwo } />
            <Route path="/composition-iii" component={ compositionThree } />
          </div>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h2>Grid Mon</h2>
    <ul style={{textAlign:'left'}}>
      <li><Link to="/composition-ii">Composition II in Red, Blue, and Yellow (1930)</Link></li>
      <li><Link to="/composition-iii">Composition III, with Red, Blue, Yellow, and Black (1929)</Link></li>
    </ul>
  </div>
)

const compositionTwo = () => (
  <div className="square frame">
    <div className="canvas compositionTwo">
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  </div>
);

const compositionThree = () => (
  <div className="square frame">
    <div className="canvas compositionThree">
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  </div>
);
export default App;
