import * as React from 'react';
import {connect} from 'react-redux';
import {debounce} from 'lodash';

interface IProps {
  readonly available: boolean;
  readonly onChange: (query: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.SFC<IProps> = ({available, onChange}) => (
  <div>
    <input type="text" onChange={onChange} />
    <div>{available ? 'avalible' : 'not avalible'}</div>
  </div>
);

export default connect(
  state => ({available: state}),
  dispatch => {
    const binded = debounce(dispatch, 150);

    return {
      onChange(event: React.ChangeEvent<HTMLInputElement>) {
        binded({
          type: 'SEARCH',
          name: event.target.value,
        });
      },
    };
  },
)(Search);
