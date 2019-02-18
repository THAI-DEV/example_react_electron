import React, { Component } from 'react';

class TitleText extends Component {
  state = {};
  render() {
    return (
      <div class="alert alert-light" role="alert">
        {this.props.title}
      </div>
    );
  }
}

export default TitleText;
