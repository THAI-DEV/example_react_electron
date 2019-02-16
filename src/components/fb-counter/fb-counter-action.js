export const FbCounterActionType = {
  IncrementLike: '[FbCounter] IncrementLike',
  IncrementDisLike: '[FbCounter] IncrementDisLike',
  Reset: '[FbCounter] Reset'
};

export function incrementLike(counter) {
  return {
    type: FbCounterActionType.IncrementLike,
    payload: { counter: counter }
  };
}

export function incrementDisLike(counter) {
  return {
    type: FbCounterActionType.IncrementDisLike,
    payload: { counter: counter }
  };
}

export function resetCounter() {
  return {
    type: FbCounterActionType.Reset
  };
}
