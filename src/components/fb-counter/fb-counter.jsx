import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementLike, incrementDisLike, resetValue } from './fb-counter-action';

class FbCounter extends Component {
  // state = { likeValue: 0, disLikeValue: 0 };
  handleLike = () => {
    // this.setState({ likeValue: this.state.likeValue + 1 });
    // this.handleIncrementLike(this.state.likeValue);
  };
  handleDisLike = () => {
    // this.setState({ disLikeValue: this.state.disLikeValue + 1 });
    // this.handleIncrementDisLike(this.state.disLikeValue);
  };

  render() {
    const { stateData, handleIncrementLike, handleIncrementDisLike, handleReset } = this.props;
    return (
      <div>
        <div>
          <span />
          <button className="btn btn-info" style={{ width: '200px' }} onClick={handleReset}>
            Reset
          </button>
        </div>
        {stateData.likeValue}
        <button
          className="btn btn-success btn-sm m-2"
          style={{ width: '70px' }}
          onClick={() => handleIncrementLike(stateData)}
        >
          Like
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          style={{ width: '70px' }}
          onClick={() => handleIncrementDisLike(stateData)}
        >
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
    handleIncrementLike: data => {
      dispatch(incrementLike(data));
    },
    handleIncrementDisLike: data => {
      dispatch(incrementDisLike(data));
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
