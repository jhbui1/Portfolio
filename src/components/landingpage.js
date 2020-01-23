import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import './styles/landingpage.scss';

class LandingPage extends Component {
  render(){
    return(
      <div style={{width:'100%',height:'100vh', margin:'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner">
              <h1>Jonathan Bui</h1>
            </div>
            <img
              src={require('./assets/profile-1.jpg')}
              alt="profile"
              className="profile-pic"
            />
            <div className="banner">
              <h1>Software Developer</h1>
              <hr/>
              <h2>HTML/CSS | Vue | React | MySQL | C++ | Python </h2>

            </div>
          </Cell>
        </Grid>
      </div>

    )
  }
}

export default LandingPage;
