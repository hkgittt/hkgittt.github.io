import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const imgSourceArr = [];

imgSourceArr[1] = require('../slides/1.png');
imgSourceArr[2] = require('../slides/2.png');
imgSourceArr[3] = require('../slides/3.png');
imgSourceArr[4] = require('../slides/4.png');
imgSourceArr[5] = require('../slides/5.png');
imgSourceArr[6] = require('../slides/6.png');
imgSourceArr[7] = require('../slides/7.png');
imgSourceArr[8] = require('../slides/8.png');
imgSourceArr[9] = require('../slides/9.png');
imgSourceArr[10] = require('../slides/10.png');
imgSourceArr[11] = require('../slides/11.png');
imgSourceArr[12] = require('../slides/12.png');
imgSourceArr[13] = require('../slides/13.png');
imgSourceArr[14] = require('../slides/14.png');

const Slide = (props) => (
  <ReactCSSTransitionGroup
    transitionName="list"
    transitionEnterTimeout={1000}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={1000}
  >
    {console.log(props.params.slide)}
    <div key={props.params.slide} className="slide"><img src={imgSourceArr[props.params.slide]} />
    </div>
  </ReactCSSTransitionGroup>
);

export default Slide;
