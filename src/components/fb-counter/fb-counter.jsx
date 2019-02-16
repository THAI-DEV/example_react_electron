import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementLike, incrementDisLike } from './fb-counter-action';

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
    const { counters, handleIncrementLike, handleIncrementDisLike } = this.props;
    return (
      <div>
        {/* {this.formatCount()} */}
        {counters.likeValue}
        <button className="btn btn-success btn-sm m-2" onClick={() => handleIncrementLike(counters)}>
          Like
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => handleIncrementDisLike(counters)}>
          DisLike
        </button>
        {counters.disLikeValue}
      </div>
    );
  }

  formatCount() {
    console.log(this.counters);
  }
}

function mapStateToProps(state) {
  return { counters: state.fbCounterReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    handleIncrementLike: counter => {
      dispatch(incrementLike(counter));
    },
    handleIncrementDisLike: counter => {
      dispatch(incrementDisLike(counter));
    }
    // handleDecrement: (counter, ind) => {
    //   dispatch(decrementCounter(counter, ind));
    // },
    // handleZero: (counter, ind) => {
    //   dispatch(zeroCounter(counter, ind));
    // },
    // handleDelete: counterId => {
    //   dispatch(deleteCounter(counterId));
    // },
    // handleReset: () => {
    //   dispatch(resetCounter());
    // },
    // handleAdd: () => {
    //   dispatch(addCounter());
    // }
  };
}

//export default FbCounter;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FbCounter);
