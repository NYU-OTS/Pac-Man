import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {compose, createStore} from 'redux';
import { initialState } from './constants';
import Game from './containers/Game';
import './index.css';
import gridUpdation from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

function configureStore(){
  return createStore(
    gridUpdation,
    initialState,
    compose(
      (window as any).devToolsExtension? (window as any).devToolsExtension() : (f: any) => f
    )
  );
}
const store = configureStore()

ReactDOM.render(
  <Provider store = {store}>
    { <Game /> }
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
