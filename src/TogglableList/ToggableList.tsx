import * as React from 'react';
import {connect} from 'react-redux';

import {IGlobalState} from '../index';

import {TogglableItem, IState as IItemState} from './TogglableItem';

export interface IState {
  readonly list: ReadonlyArray<IItemState & {readonly ID: number}>;
  readonly nextItemID: number;
}

export interface ICallbacks {
  readonly setItemState: (itemID: number, newState: boolean) => void;
}

type IProps = IState & ICallbacks;

const ToggableList: React.SFC<IProps> = ({
  list,
  nextItemID,
  setItemState,
}: IProps) => (
  <ul>
    {list.map(i => (
      <TogglableItem
        key={i.ID}
        {...i}
        onClick={() => setItemState(i.ID, !i.done)}
      />
    ))}
  </ul>
);

/*
  Connect creates a new React element that talks to our Redux state. It maps the component props and callbacks to state and dispatch events respectivly.
*/

export interface IActions {
  readonly type: 'TOGGLE_LIST_ITEM';
  readonly itemID: number;
}

export const Component = connect(
  (state: IGlobalState ) => state,
  dispatch => ({
    setItemState: (itemID: number, newState: boolean) => {
      dispatch({
        type: 'TOGGLE_LIST_ITEM',
        itemID, newState
      });
    }
  })
)(ToggableList);
