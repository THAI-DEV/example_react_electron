import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addCounter,
  decrementCounter,
  deleteCounter,
  incrementCounter,
  resetCounter,
  zeroCounter
} from './counter-action';
import CounterRedux from './counter-redux';
import CounterReduxToolBox from './counter-redux-toolbox';

// const counterStore = createStore(reducerStore);

class CounterReduxList extends Component {
  render() {
    const { counters, handleIncrement, handleDecrement, handleZero, handleDelete, handleReset, handleAdd } = this.props;
    return (
      <div>
        <CounterReduxToolBox total={this.calTotal()} onReset={() => handleReset()} onAdd={() => handleAdd()} />

        {counters.map((item, index) => (
          <CounterRedux
            key={item.id}
            ind={index}
            counter={item}
            onIncrement={() => handleIncrement(item, index)}
            onDecrement={() => handleDecrement(item, index)}
            onZero={() => handleZero(item, index)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>
    );
  }

  calTotal = () => {
    let total = 0;

    this.props.counters.forEach(item => {
      total = total + item.value;
    });

    return total;
  };
}

function mapStateToProps(state) {
  return { counters: state.counterReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    handleIncrement: (counter, ind) => {
      dispatch(incrementCounter(counter, ind));
    },
    handleDecrement: (counter, ind) => {
      dispatch(decrementCounter(counter, ind));
    },
    handleZero: (counter, ind) => {
      dispatch(zeroCounter(counter, ind));
    },
    handleDelete: counterId => {
      dispatch(deleteCounter(counterId));
    },
    handleReset: () => {
      dispatch(resetCounter());
    },
    handleAdd: () => {
      dispatch(addCounter());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterReduxList);
