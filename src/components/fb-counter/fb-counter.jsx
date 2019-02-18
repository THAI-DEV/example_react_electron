import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementLike, incrementDisLike, resetValue } from './fb-counter-action';

class FbCounter extends Component {
  // state = { likeValue: 0, disLikeValue: 0 };

  //handleLike = () => {
  // this.setState({ likeValue: this.state.likeValue + 1 });
  // this.handleIncrementLike(this.state.likeValue);
  //};

  myStyle = {
    small: { width: '70px' },
    big: { width: '200px' }
  };

  render() {
    const { stateData, handleIncrementLike, handleIncrementDisLike, handleReset } = this.props;
    return (
      <div>
        <div>
          <span />
          <button className="btn btn-info" style={this.myStyle.big} onClick={handleReset}>
            Reset
          </button>
        </div>
        {stateData.likeValue}
        <button className="btn btn-success btn-sm m-2" style={this.myStyle.small} onClick={handleIncrementLike}>
          Like
        </button>
        <button className="btn btn-danger btn-sm m-2" style={this.myStyle.small} onClick={handleIncrementDisLike}>
          DisLike
        </button>
        {stateData.disLikeValue}
      </div>
    );
  }

  // formatCount() {
  //   console.log(this.counters);
  // }
}

function mapStateToProps(state) {
  return { stateData: state.fbCounterReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    handleIncrementLike: () => {
      dispatch(incrementLike());
    },
    handleIncrementDisLike: () => {
      dispatch(incrementDisLike());
    },

    handleReset: () => {
      dispatch(resetValue());
    }
  };
}

//export default FbCounter;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FbCounter);
