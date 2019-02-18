export const FbCounterActionType = {
  IncrementLike: '[FbCounter] IncrementLike',
  IncrementDisLike: '[FbCounter] IncrementDisLike',
  Reset: '[FbCounter] Reset'
};

export function incrementLike(data) {
  return {
    type: FbCounterActionType.IncrementLike
    // payload: { data: data }
  };
}

export function incrementDisLike() {
  return {
    type: FbCounterActionType.IncrementDisLike
    // payload: { data: data }
  };
}

export function resetValue() {
  return {
    type: FbCounterActionType.Reset
  };
}
