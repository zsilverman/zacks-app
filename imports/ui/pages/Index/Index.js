import React from 'react';
import { Button } from 'react-bootstrap';

import './Index.scss';

class Index extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

      const script = document.createElement('script');
      script.async = true;
      script.src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(script, s);

    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
    window.myWidgetParam.push({
      id: 15,
      cityid: '5391959',
      appid: '8cc70f4b037c059cca405feefa226623',
      units: 'imperial',
      containerid: 'openweathermap-widget-15',  
    });  

  }

  render(){
    return (

      <div className="Index">
    <img
      src="http://cssf.usc.edu/History/2012/pictures/Portrait/images/33049.jpg"
    />
    <h1>Developer</h1>
    <div id="openweathermap-widget-15"></div>
    <p>Zack's Badass App</p>
    <div>
      <Button href="https://www.linkedin.com/in/zack-silverman-a96296133/">Click for LinkedIn</Button>
      <Button href="https://github.com/zsilverman"><i className="fa fa-star" /> See my GitHub</Button>
    </div>

    <footer>
      <p><a href="http://cleverbeagle.com?utm_source=pupappindex&utm_campaign=oss">Check out my webpage</a></p>
    </footer>
  </div>

  );
  }

}


export default Index;
