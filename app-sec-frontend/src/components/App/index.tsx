import React from 'react';
import './index.css';
import {connect} from "react-redux";
import Counter from "../Counter";
import {State} from "../../reducer";

export enum ActionType {
  INCREASE = "increase",
  DECREASE = "decrease",
  API_QUERY = "api query",
}

export default connect(
    ({countValue}: State) => ({countValue}),
    dispatch => ({
      increaseCount: () => dispatch({type: ActionType.INCREASE}),
      decreaseCount: () => dispatch({type: ActionType.DECREASE})
    }))(Counter);
