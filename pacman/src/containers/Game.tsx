// import * as React from 'react'
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/';
import Game from '../components/Game';
import { IStoreState } from '../types/index';

// import { Props } from '../components/Hello';

// interface StateToProps {
//   grid: number[][];
// }

// interface DispatchToProps {
//   handleOnKeyPress: (event: KeyboardEvent) => void;
// }

export function mapStateToProps(state: IStoreState) {
  return {
    grid: state.grid,
    status: state.status,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.NavigateAction>) {
  return {
    clickToStart: () => dispatch(actions.startGame()),
    handleOnKeyPress: (event: KeyboardEvent) => dispatch(actions.keyPress(event)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
