import React from 'react';
import { Link } from 'react-router-dom';
import './styles/hexagons.css';
import './styles/glitch.css';
import './styles/home.css';

class Home extends React.Component {
  render () {
    return (
      <div id="home-component">
        <ul id="hexGrid">
          <li className="hex">
            <div className="hexConnector"></div>
          </li>
          <li className="hex">
            <div className="hexConnector"></div>
          </li>
          <li className="hex">
            <div className="hexConnector"></div>
          </li>
          <li className="hex">
            <div className="hexConnector"></div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link className="hexLink" to="/movie">
                <img src="https://dssakj60q3jyb.cloudfront.net/screenshots/08+-+WEDGE+ARGUMENT+still+01.png" alt="" />
                <div className="caption">
                  <h1>Movie</h1>
                </div>
              </Link>
            </div>
          </li>
        </ul>
        <div className="title">
          <div className="glitch-container">
            <div className="glitch" data-text="IMAGES OF ASCENSION">IMAGES OF ASCENSION</div>
          </div>
          <h3>Dirk Stromberg</h3>
        </div>
        <ul id="hexGrid">
          <li className="hex">
            <div className="hexIn">
              <Link className="hexLink" to="/scenes">
                <img src="https://dssakj60q3jyb.cloudfront.net/screenshots/11+-+WORLD+AFTER+PEACE+still+03.png" alt="" />
                <div className="caption">
                  <h1>Scenes</h1>
                </div>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexConnector"></div>
          </li>
          <li className="hex">
            <div className="hexConnector"></div>
          </li>
          <li className="hex">
            <div className="hexConnector"></div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link className="hexLink" to="/credits">
                <img src="https://dssakj60q3jyb.cloudfront.net/screenshots/03+-+DIFFERENCE+ASCENSION.00_00_11_22.Still002.jpg" alt="" />
                <div className="caption">
                  <h1>Credits</h1>
                </div>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <div className="hexLink">
                <img src="https://dssakj60q3jyb.cloudfront.net/thumbnails/01+-+HYPER+INSTRUMENTALISM+%232.00_00_48_16.Still001.jpg" alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home;
