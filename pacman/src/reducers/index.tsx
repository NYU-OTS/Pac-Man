import { NavigateAction } from '../actions';
import { KEY_PRESS, START_GAME, Status } from '../constants/index';
import { IStoreState } from '../types/index';

export default function gridUpdation(state: IStoreState, action: NavigateAction): IStoreState {
  switch (action.type) {
    case START_GAME:
      return { ...state, status: Status.InProgress};
    case KEY_PRESS:
      global.console.log(action.keyPressCode);
      global.console.log(state.grid);
      const modifiedState = generateGrid(state, action.keyPressCode);
      return { ...state, grid: modifiedState.grid, pacmanX: modifiedState.x, pacmanY: modifiedState.y, score: modifiedState.score, status: modifiedState.status };
    default:
      return state;
  }
}

function generateGrid(state: IStoreState, keyPressCode: number) {

  const tempGrid = [...state.grid];
  let tempPacmanX = state.pacmanX;
  let tempPacmanY = state.pacmanY;
  let tempScore = state.score;
  let tempStatus = state.status;

  if (keyPressCode === 37) { // PACMAN MOVE LEFT
    if (tempGrid[tempPacmanY][tempPacmanX - 1] === 4)
    {
      tempStatus = Status.Over;
    }
    else if (tempGrid[tempPacmanY][tempPacmanX - 1] !== 1) {
      if (tempGrid[tempPacmanY][tempPacmanX - 1] === 2)
      {
        tempScore = tempScore + 1;
      }
      tempGrid[tempPacmanY][tempPacmanX] = 3;
      tempPacmanX = tempPacmanX - 1;
      tempGrid[tempPacmanY][tempPacmanX] = 5;
    }
  } else if (keyPressCode === 38) { // PACMAN MOVE UP
    if (tempGrid[tempPacmanY - 1][tempPacmanX] === 4)
    {
      tempStatus = Status.Over;
    }
    else if (tempGrid[tempPacmanY - 1][tempPacmanX] !== 1) {
      if (tempGrid[tempPacmanY - 1][tempPacmanX] === 2)
      {
        tempScore = tempScore + 1;
      }
      tempGrid[tempPacmanY][tempPacmanX] = 3;
      tempPacmanY = tempPacmanY - 1;
      tempGrid[tempPacmanY][tempPacmanX] = 5;
    }
  } else if (keyPressCode === 39) { // PACMAN MOVE RIGHT
    if (tempGrid[tempPacmanY][tempPacmanX + 1] === 4)
    {
      tempStatus = Status.Over;
    }
    else if (tempGrid[tempPacmanY][tempPacmanX + 1] !== 1) {
      if (tempGrid[tempPacmanY][tempPacmanX + 1] === 2)
      {
        tempScore = tempScore + 1;
      }
      tempGrid[tempPacmanY][tempPacmanX] = 3;
      tempPacmanX = tempPacmanX + 1;
      tempGrid[tempPacmanY][tempPacmanX] = 5;
    }
  } else if (keyPressCode === 40) { // PACMAN MOVE DOWN
    if (tempGrid[tempPacmanY + 1][tempPacmanX] === 4)
    {
      tempStatus = Status.Over;
    }
    else if (tempGrid[tempPacmanY + 1][tempPacmanX] !== 1) {
      if (tempGrid[tempPacmanY + 1][tempPacmanX] === 2)
      {
        tempScore = tempScore + 1;
      }
      tempGrid[tempPacmanY][tempPacmanX] = 3;
      tempPacmanY = tempPacmanY + 1;
      tempGrid[tempPacmanY][tempPacmanX] = 5;
    }
  }
  return {
    grid: tempGrid,
    score: tempScore,
    status: tempStatus,
    x: tempPacmanX,
    y: tempPacmanY,
  };
}