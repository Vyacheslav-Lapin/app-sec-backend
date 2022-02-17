import React from 'react';
import './index.css';
import {connect} from "react-redux";
import Counter from "../Counter";
import {State} from "../../reducer";

export enum CounterActionType {
  INCREASE = "increase",
  DECREASE = "decrease"
}

export default connect(
    ({countValue}: State) => ({countValue}),
    dispatch => ({
      increaseCount: () => dispatch({type: CounterActionType.INCREASE}),
      decreaseCount: () => dispatch({type: CounterActionType.DECREASE})
    }))(Counter);
