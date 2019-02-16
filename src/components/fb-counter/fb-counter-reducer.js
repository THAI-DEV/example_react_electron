import { FbCounterActionType } from './fb-counter-action';
// import { incrementLike, incrementDisLike } from './fb-counter-action';

const initData = { likeValue: 0, disLikeValue: 0 };

export default function fbCounterReducerFn(state = initData, action) {
  let newState;
  // let ind;
  switch (action.type) {
    case FbCounterActionType.IncrementLike:
      // console.log(state);
      newState = { ...state };

      // ind = action.payload.ind;

      newState.likeValue = state.likeValue + 1;
      // newState.disLikeValue = state.disikeValue;

      return newState;

    case FbCounterActionType.IncrementDisLike:
      // console.log(state);
      newState = { ...state };
      // ind = action.payload.ind;

      newState.disLikeValue = state.disLikeValue + 1;

      return newState;

    case FbCounterActionType.Reset:
      newState = state.map(item => {
        item.value = 0;
        return item;
      });

      return newState;

    default:
      return state;
  }
}
