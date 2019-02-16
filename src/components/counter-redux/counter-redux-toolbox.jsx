import React from 'react';

const CounterReduxToolBox = props => {
  const { total, onReset, onAdd } = props;
  return (
    <div>
      <button className="btn btn-primary m-2" onClick={onReset}>
        Reset All
      </button>

      <button className="btn btn-primary m-2" onClick={onAdd}>
        Add List
      </button>

      <button className="btn btn-link m-2">
        Total
        <span className="badge badge-info m-2">{total}</span>
      </button>
    </div>
  );
};

export default CounterReduxToolBox;
