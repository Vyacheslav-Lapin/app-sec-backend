import {ActionType} from "../components/App";

export interface State {
  countValue: number
}

export default (state: State = {countValue: 0}, {type}: {type: ActionType}): State => {
  const {countValue} = state;
  switch (type) {
    case ActionType.INCREASE: return {countValue: countValue + 1};
    case ActionType.DECREASE: return {countValue: countValue - 1};
    default: return state;
  }
}
