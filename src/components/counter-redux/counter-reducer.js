import { CounterActionType } from './counter-action';

const initData = [{ id: 1, value: 0 }];

export default function counterReducerFn(state = initData, action) {
  let newState;
  let ind;
  switch (action.type) {
    case CounterActionType.Increment:
      newState = [...state];
      ind = action.payload.ind;

      newState[ind] = { ...action.payload.counter };
      newState[ind].value++;

      return newState;
    case CounterActionType.Decrement:
      newState = [...state];
      ind = action.payload.ind;

      newState[ind] = { ...action.payload.counter };
      if (newState[ind].value > 0) {
        newState[action.payload.ind].value--;
      }

      return newState;

    case CounterActionType.Zero:
      newState = [...state];
      ind = action.payload.ind;

      newState[ind] = { ...action.payload.counter };
      newState[ind].value = 0;

      return newState;

    case CounterActionType.Delete:
      newState = state.filter(item => item.id !== action.payload.counterId);

      return newState;

    case CounterActionType.Add:
      newState = [...state];
      let newId;

      if (newState.length === 0) {
        newId = 0;
      } else {
        newId = newState[newState.length - 1].id;
      }

      newId++;

      newState.push({ id: newId, value: 0 });

      return newState;

    case CounterActionType.Reset:
      newState = state.map(item => {
        item.value = 0;
        return item;
      });

      return newState;

    case CounterActionType.Init:
      newState = initData;

      return newState;

    default:
      return state;
  }
}
