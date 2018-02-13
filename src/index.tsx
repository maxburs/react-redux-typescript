import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers, createStore, Reducer} from 'redux';

import * as TogglableList from './TogglableList';
import * as AddItem from './AddItem';

export type IGlobalState = TogglableList.IState;
type IGlobalActions = TogglableList.IActions | AddItem.IActions;

function reducer(
  state: IGlobalState = {
    list: [],
    nextItemID: 0,
  },
  action: IGlobalActions,
) {
  window.console.log(action);
  switch (action.type) {
    case 'TOGGLE_LIST_ITEM':
      return {
        ...state,
        list: state.list.map(
          i =>
            i.ID === action.itemID
              ? {
                  done: !i.done,
                  text: i.text,
                  ID: i.ID,
                }
              : i,
        ),
      };
    case 'ADD_LIST_ITEM':
      return {
        list: [
          ...state.list,
          {
            ID: state.nextItemID,
            done: false,
            text: action.text,
          },
        ],
        nextItemID: state.nextItemID + 1,
      };
    default:
      return state;
  }
}

window.addEventListener('load', () => {
  ReactDOM.render(
    // Typing is broken, fixed in redux 4.0.
    // https://github.com/reactjs/redux/issues/2709
    // @ts-ignore
    <Provider store={createStore(reducer)}>
      <>
        <AddItem.Component />
        <TogglableList.Component />
      </>
    </Provider>,
    document.getElementById('root'),
  );
});
