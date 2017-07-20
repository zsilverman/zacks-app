import React from 'react';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Forecast from 'react-forecast'; // Forecast package

import './Index.scss';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state ={
      nowTime: ''
    };

    this.updateNowTime = this.updateNowTime.bind(this);
    this.nowIs = this.nowIs.bind(this);
  }

  nowIs(){
    this.updateNowTime(new Date().toLocaleTimeString())
  }

  updateNowTime(nowTime){
    this.setState({nowTime})
  }

  componentDidMount(){
    setInterval(this.nowIs, 1000); 
  }

  render(){
    return (

      <div className="Index">
    <img
      src="http://cssf.usc.edu/History/2012/pictures/Portrait/images/33049.jpg"
    />
    <h1>Developer</h1>
    <p>Zack's Badass App</p> 

    <div>
          <h2>It is {this.state.nowTime}.</h2> 
    </div>

    

    <div>
      <Button href="https://www.linkedin.com/in/zack-silverman-a96296133/">Click for LinkedIn</Button>
      <Button href="https://github.com/zsilverman"><i className="fa fa-star" /> See my GitHub</Button>
    </div>

    <Forecast latitude={34.05} longitude={118.25} name='Los Angeles' />

    <footer>
      <p><a href="http://cleverbeagle.com?utm_source=pupappindex&utm_campaign=oss">Check out my webpage</a></p>
    </footer>
  </div>

  );
  }

} //end of class Index




export default Index;
