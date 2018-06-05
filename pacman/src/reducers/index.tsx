import { NavigateAction } from '../actions';
import { KEY_PRESS } from '../constants/index';
import { IStoreState } from '../types/index';

export default function gridUpdation(state: IStoreState, action: NavigateAction): IStoreState {
  switch (action.type) {
    case KEY_PRESS:
      global.console.log(action.keyPressCode);
      global.console.log(state.grid);
      const modifiedState = generateGrid(state, action.keyPressCode);
      return { ...state, grid: modifiedState.grid, pacmanX: modifiedState.x, pacmanY: modifiedState.y };
    default:
      return state;
  }
}

function generateGrid(state: IStoreState, keyPressCode: number) {

  const tempGrid = [...state.grid];
  let tempPacmanX = state.pacmanX;
  let tempPacmanY = state.pacmanY;

  if (keyPressCode === 37) { // PACMAN MOVE LEFT
    if (tempGrid[tempPacmanY][tempPacmanX - 1] !== 1) {
      tempGrid[tempPacmanY][tempPacmanX] = 3;
      tempPacmanX = tempPacmanX - 1;
      tempGrid[tempPacmanY][tempPacmanX] = 5;
    }
  } else if (keyPressCode === 38) { // PACMAN MOVE UP
    if (tempGrid[tempPacmanY - 1][tempPacmanX] !== 1) {
      tempGrid[tempPacmanY][tempPacmanX] = 3;
      tempPacmanY = tempPacmanY - 1;
      tempGrid[tempPacmanY][tempPacmanX] = 5;
    }
  } else if (keyPressCode === 39) { // PACMAN MOVE RIGHT
    if (tempGrid[tempPacmanY][tempPacmanX + 1] !== 1) {
      tempGrid[tempPacmanY][tempPacmanX] = 3;
      tempPacmanX = tempPacmanX + 1;
      tempGrid[tempPacmanY][tempPacmanX] = 5;
    }
  } else if (keyPressCode === 40) { // PACMAN MOVE DOWN
    if (tempGrid[tempPacmanY + 1][tempPacmanX] !== 1) {
      tempGrid[tempPacmanY][tempPacmanX] = 3;
      tempPacmanY = tempPacmanY + 1;
      tempGrid[tempPacmanY][tempPacmanX] = 5;
    }
  }
  return {
    grid: tempGrid,
    x: tempPacmanX,
    y: tempPacmanY
  };
}