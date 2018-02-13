import * as React from 'react';

export interface IState {
  readonly done: boolean;
  readonly text: string;
}

export interface IDispach {
  readonly onClick: () => void;
}

export type IProps = IState & IDispach;

export const TogglableItem: React.SFC<IProps> = ({
  done,
  text,
  onClick,
}: IProps) => (
  <li style={{textDecoration: done ? 'line-through' : 'none'}} onClick={onClick}>
    {text}
  </li>
);

export default TogglableItem;
