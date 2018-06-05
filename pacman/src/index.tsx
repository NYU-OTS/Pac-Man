import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import { Provider } from 'react-redux';
import {compose, createStore} from 'redux';
import Game from './containers/Game';
import gridUpdation from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
// import thunk from 'redux-thunk';

const initialState = {
  grid: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  pacmanX: 6,
  pacmanY: 4,

}

function configureStore(){
  return createStore(
    gridUpdation,
    initialState,
    compose(
      // applyMiddleware(thunk),
      (window as any).devToolsExtension? (window as any).devToolsExtension() : (f: any) => f
    )
  );
}
const store = configureStore()

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );

ReactDOM.render(
  <Provider store = {store}>
    { <Game /> }
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
