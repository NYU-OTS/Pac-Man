import Game, { Props } from '../components/Game';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ grid }: StoreState) {
  return {
    grid,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.NavigateAction>) {
  return {
    onMoveUp: () => dispatch(actions.moveUp()),
    onMoveDown: () => dispatch(actions.moveDown()),
    onMoveLeft: () => dispatch(actions.moveLeft()),
    onMoveRight: () => dispatch(actions.moveRight()),
  };
}

export default connect<Props>(mapStateToProps, mapDispatchToProps)(Game);
