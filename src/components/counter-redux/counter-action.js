export const CounterActionType = {
  Increment: '[Counter] Increment',
  Decrement: '[Counter] Decrement',
  Zero: '[Counter] Zero',
  Reset: '[Counter] Reset',
  Delete: '[Counter] Delete',
  Add: '[Counter] Add',
  Init: '[Counter] Init'
};

export function incrementCounter(counter, ind) {
  return {
    type: CounterActionType.Increment,
    payload: { counter: counter, ind: ind }
  };
}

export function decrementCounter(counter, ind) {
  return {
    type: CounterActionType.Decrement,
    payload: { counter: counter, ind: ind }
  };
}

export function zeroCounter(counter, ind) {
  return {
    type: CounterActionType.Zero,
    payload: { counter: counter, ind: ind }
  };
}

export function deleteCounter(counterId) {
  return {
    type: CounterActionType.Delete,
    payload: { counterId: counterId }
  };
}

export function resetCounter() {
  return {
    type: CounterActionType.Reset
  };
}

export function addCounter(counterId) {
  return {
    type: CounterActionType.Add
  };
}

export function initCounter() {
  return {
    type: CounterActionType.Init
  };
}
