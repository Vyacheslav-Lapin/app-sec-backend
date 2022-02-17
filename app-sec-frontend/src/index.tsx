import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {ActionType} from './components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import User from "./model/User";

ReactDOM.render(
    <React.StrictMode>
      <Provider store={createStore(reducer, applyMiddleware(
          store => next => action => {
            console.log('dispatching type:', action.type)
            console.log('previous state:', store.getState())
            let result = next(action)
            console.log('new state:', store.getState())
            return result;
          },
          store => next => action => {
            if (action.type === ActionType.API_QUERY && !action.payload)
              fetch(`/api/users`)
                  .then(response => response.json() as Promise<User[]>)
                  .then(users => next({
                    type: ActionType.API_QUERY,
                    payload: users,
                  }))
            else return next(action);
          }
      ))}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
