import React, { Component } from 'react';

import './throb.less';


export default class Throb extends Component {
  render() {
    return <div className="throb">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>;
  }
}
