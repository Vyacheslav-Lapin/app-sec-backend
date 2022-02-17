import {CounterActionType} from "../components/App";

export interface State {
  countValue: number
}

export default (state: State = {countValue: 0}, {type}: {type: CounterActionType}): State => {
  const {countValue} = state;
  switch (type) {
    case CounterActionType.INCREASE: return {countValue: countValue + 1};
    case CounterActionType.DECREASE: return {countValue: countValue - 1};
    default: return state;
  }
}
