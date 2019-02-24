import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {
  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Star Wars</a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Planets</a></li>

              <li className="pure-menu-item menu-item-divided pure-menu-selected">
                <a href="#" className="pure-menu-link">Services</a>
              </li>

              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>Challenge Star Wars</h1>
          </div>

          <div className="content">
            <h2 className="content-subhead">Objective of the challenge</h2>
            <p>
              The challenge is to, given a random planet in the franchise, ask what the weather, the terrain and how many films of the franchise it appeared to be.
            </p>
            <p>
              Develop an application that randomly picks up a planet from the franchise and displays its data to serve as glue.
            </p>

            <h2 className="content-subhead">What is SWAPI?</h2>
            <p>
              The <a href="https://swapi.co/" alt="Side Menu CSS" target="_blank">Star Wars API</a> is the world's first quantified and programmatically-formatted set of Star Wars data.
            </p>
            <p>
              After hours of watching films and trawling through content online, we present to you all the People, Films, Species, Starships, Vehicles and Planets from Star Wars.
            </p>
            <p>
              We've formatted this data in <a href="https://json.org/" alt="Side Menu CSS" target="_blank">JSON</a> and exposed it to you in a <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" alt="Side Menu CSS" target="_blank">RESTish</a> implementation that allows you to programmatically collect and measure the data.
            </p>
            <p>
              <a href="https://swapi.co/documentation" alt="Side Menu CSS" target="_blank">Check out the documentation to get started consuming swapi data</a>
            </p>

            <div className="pure-g">
              <div className="pure-u-1-3">
                <img className="pure-img-responsive" src="data:image/jpeg;base64,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" alt="People" />
              </div>
              <div className="pure-u-1-3">
                <img className="pure-img-responsive" src="https://c1.staticflickr.com/5/4638/38547010314_63fa18cbf4.jpg" alt="Planets" />
              </div>
              <div className="pure-u-1-3">
                <img className="pure-img-responsive" src="https://c1.staticflickr.com/5/4693/24397131367_5c2f4dd203.jpg" alt="Starships" />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
