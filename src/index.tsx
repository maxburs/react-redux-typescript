import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, Reducer} from 'redux';

import { debounce } from 'lodash';

import Search  from './components/search';


function nameIsAvaliable(name: string): boolean {
  window.console.log('asdf');
  return Math.random() > 0.5;
}

interface ISearchAction {
  readonly type: 'SEARCH';
  readonly name: string;
}

type Actions = ISearchAction;

// connect(state => ({}), dispatch => ({
//   onChange(e) {
//     dispatch(search())
//     dispatch(searchActionCreator(e.target.value))
//   }
// }))(Comp)


function search() {
  return ({type: 'SEARCH'})
};

// function searchActionCreator(query) {
//   return new Promise(resolve=> {
//     apiCall(query, (err, result) => {
//       if (err) {
//         throw ({type: 'FAILURE'});
//       }

//       resolve({type: 'SUCCESS'});
//     })
//   });
// }


// function newSearch(event: string) {
//   window.console.log(`event: ${ event }`);
// }

// function available(state: boolean = false) {
//   return state;
// }


function searchBar(state: boolean = false, action: Actions) {
  switch (action.type) {
    case 'SEARCH':
      return nameIsAvaliable(action.name)
    default: 
      return state;
  }
}

// Typing is broken, fixed in redux 4.0.
// https://github.com/reactjs/redux/issues/2709
// @ts-ignore
const searchPage = combineReducers({
  searchBar
});


interface IState {
  readonly searchBar: boolean;
}

window.addEventListener('load', () => {
  ReactDOM.render(
    // Typing is broken, fixed in redux 4.0.
    // https://github.com/reactjs/redux/issues/2709
    // @ts-ignore
    <Provider store={createStore(searchPage)}>
      <Search />
    </Provider>,
    document.getElementById('root')
  );
});
