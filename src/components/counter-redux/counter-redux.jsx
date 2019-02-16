import React, { Component } from 'react';

class CounterRedux extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, onZero, ind } = this.props;

    const btnStyle = { width: 30 };
    return (
      <div>
        <hr />
        <h4>#{ind + 1}</h4>
        <span className={this.getBadageClasses()}>{this.formatCount()}</span>
        <button style={btnStyle} className="btn btn-success btn-sm m-2" onClick={onIncrement}>
          +
        </button>

        <button style={btnStyle} className="btn btn-warning btn-sm m-2" onClick={onDecrement}>
          -
        </button>

        <button style={btnStyle} className="btn btn-dark btn-sm m-2" onClick={onZero}>
          0
        </button>

        <button style={btnStyle} className="btn btn-danger btn-sm m-2" onClick={onDelete}>
          X
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  getBadageClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';

    return classes;
  }
}

export default CounterRedux;
