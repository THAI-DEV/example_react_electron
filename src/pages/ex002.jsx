import React, { Component } from 'react';
import FbCounter from '../components/fb-counter/fb-counter';
import TitleText from '../components/title-text';

class Ex002 extends Component {
  state = {};
  render() {
    return (
      <div>
        <TitleText title="Test Redux" />
        <FbCounter />
      </div>
    );
  }
}

export default Ex002;
