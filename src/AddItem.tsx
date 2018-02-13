import * as React from 'react';
import {connect} from 'react-redux';

interface IProps {
  readonly addItem: (itemText: string) => void;
}

const AddItem: React.SFC<IProps> = ({
  addItem
}: IProps) => {
  /* tslint:disable-next-line */
  let textBox: HTMLInputElement | null;
  function onClick() {
    if (textBox) {
      addItem(textBox.value);
      /* tslint:disable-next-line */
      textBox.value = '';
    }
  }

  return (
    <div>
      <input type='text' ref={r => (textBox = r)}/>
      <button onClick={onClick} >add</button>
    </div>
  );
};

export interface IActions {
  readonly type: 'ADD_LIST_ITEM';
  readonly text: string;
}

export const Component = connect(
  null,
  dispatch => ({
    addItem: (itemText: string) => {
      dispatch({
        type: 'ADD_LIST_ITEM',
        text: itemText,
      });
    }
  })
)(AddItem);
