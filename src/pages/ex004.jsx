import React, { useState } from 'react';
import TitleText from '../components/title-text';

function Ex004() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <TitleText title="Test Hooks" />
      <p>Count : {count}</p>
      <button className="btn btn-success m-2" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}

export default Ex004;
