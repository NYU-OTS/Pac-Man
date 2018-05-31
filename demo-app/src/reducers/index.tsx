
import { NavigateAction } from '../actions';
import { StoreState } from '../types/index';
import { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from '../constants/index';

export function gridUpdation(state: StoreState, action: NavigateAction): StoreState {
  switch (action.type) {
    case MOVE_UP:
      return { ...state, grid: generateGrid() };
    case MOVE_DOWN:
      return { ...state, grid: generateGrid() };
    case MOVE_LEFT:
      return { ...state, grid: generateGrid() };
    case MOVE_RIGHT:
      return { ...state, grid: generateGrid() };
    default:
      return state;
  }
}

function generateGrid() {
  let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
  return map;
}