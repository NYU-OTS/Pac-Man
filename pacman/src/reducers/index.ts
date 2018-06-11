import { NavigateAction } from '../actions';
import { GridTile, initialState, KEY_PRESS, START_GAME, Status } from '../constants/index';
import { IStoreState } from '../types/index';
import { Astar } from '../utils/Astar';
import { Grid } from '../utils/Grid';

export default function gridUpdation(state: IStoreState, action: NavigateAction): IStoreState {

  switch (action.type) {
    case START_GAME:
      if (state.status === Status.YetToStart) {
        return { ...state, status: Status.InProgress };
      }
      else {
        return {
          ...state,
          ghost1Previous: initialState.ghost1Previous,
          ghost1X: initialState.ghost1X,
          ghost1Y: initialState.ghost1Y,
          ghost2Previous: initialState.ghost2Previous,
          ghost2X: initialState.ghost2X,
          ghost2Y: initialState.ghost2Y,
          ghost3Previous: initialState.ghost3Previous,
          ghost3X: initialState.ghost3X,
          ghost3Y: initialState.ghost3Y,
          ghost4Previous: initialState.ghost4Previous,
          ghost4X: initialState.ghost4X,
          ghost4Y: initialState.ghost4Y,
          grid: initialState.grid,
          pacmanX: initialState.pacmanX,
          pacmanY: initialState.pacmanY,
          score: initialState.score,
          status: Status.InProgress
        };
      }

    case KEY_PRESS:
      const modifiedState = generateGrid(state, action.keyPressCode);
      return {
        ...state,
        ghost1Previous: modifiedState.g1Previous,
        ghost1X: modifiedState.g1X,
        ghost1Y: modifiedState.g1Y,
        ghost2Previous: modifiedState.g2Previous,
        ghost2X: modifiedState.g2X,
        ghost2Y: modifiedState.g2Y,
        ghost3Previous: modifiedState.g3Previous,
        ghost3X: modifiedState.g3X,
        ghost3Y: modifiedState.g3Y,
        ghost4Previous: modifiedState.g4Previous,
        ghost4X: modifiedState.g4X,
        ghost4Y: modifiedState.g4Y,
        grid: modifiedState.grid,
        pacmanX: modifiedState.x,
        pacmanY: modifiedState.y,
        score: modifiedState.score,
        status: modifiedState.status
      };
    default:
      return state;
  }
}

function generateGrid(state: IStoreState, keyPressCode: number) {

  const tempGrid = [...state.grid];
  let ghost1Previous = state.ghost1Previous;
  let ghost1X = state.ghost1X;
  let ghost1Y = state.ghost1Y;
  let ghost2Previous = state.ghost2Previous;
  let ghost2X = state.ghost2X;
  let ghost2Y = state.ghost2Y;
  let ghost3Previous = state.ghost3Previous;
  let ghost3X = state.ghost3X;
  let ghost3Y = state.ghost3Y;
  let ghost4Previous = state.ghost4Previous;
  let ghost4X = state.ghost4X;
  let ghost4Y = state.ghost4Y;
  let tempPacmanX = state.pacmanX;
  let tempPacmanY = state.pacmanY;
  let tempScore = state.score;
  let tempStatus = state.status;

  if (keyPressCode === 37) { // PACMAN MOVE LEFT
    if (tempGrid[tempPacmanY][tempPacmanX - 1] === GridTile.Ghost1 ||
      tempGrid[tempPacmanY][tempPacmanX - 1] === GridTile.Ghost2 ||
      tempGrid[tempPacmanY][tempPacmanX - 1] === GridTile.Ghost3 ||
      tempGrid[tempPacmanY][tempPacmanX - 1] === GridTile.Ghost4) {
      tempStatus = Status.Over;
      return {
        g1Previous: ghost1Previous,
        g1X: ghost1X,
        g1Y: ghost1Y,
        g2Previous: ghost2Previous,
        g2X: ghost2X,
        g2Y: ghost2Y,
        g3Previous: ghost3Previous,
        g3X: ghost3X,
        g3Y: ghost3Y,
        g4Previous: ghost4Previous,
        g4X: ghost4X,
        g4Y: ghost4Y,
        grid: tempGrid,
        score: tempScore,
        status: tempStatus,
        x: tempPacmanX,
        y: tempPacmanY,
      };
    }
    else if (tempGrid[tempPacmanY][tempPacmanX - 1] !== GridTile.Wall) {
      if (tempGrid[tempPacmanY][tempPacmanX - 1] === GridTile.Coin) {
        tempScore = tempScore + 1;
      }
      tempGrid[tempPacmanY][tempPacmanX] = GridTile.Ground;
      tempPacmanX = tempPacmanX - 1;
      tempGrid[tempPacmanY][tempPacmanX] = GridTile.Pacman;
    }
  } else if (keyPressCode === 38) { // PACMAN MOVE UP
    if (tempGrid[tempPacmanY - 1][tempPacmanX] === GridTile.Ghost1 ||
      tempGrid[tempPacmanY - 1][tempPacmanX] === GridTile.Ghost2 ||
      tempGrid[tempPacmanY - 1][tempPacmanX] === GridTile.Ghost3 ||
      tempGrid[tempPacmanY - 1][tempPacmanX] === GridTile.Ghost4) {
      tempStatus = Status.Over;
      return {
        g1Previous: ghost1Previous,
        g1X: ghost1X,
        g1Y: ghost1Y,
        g2Previous: ghost2Previous,
        g2X: ghost2X,
        g2Y: ghost2Y,
        g3Previous: ghost3Previous,
        g3X: ghost3X,
        g3Y: ghost3Y,
        g4Previous: ghost4Previous,
        g4X: ghost4X,
        g4Y: ghost4Y,
        grid: tempGrid,
        score: tempScore,
        status: tempStatus,
        x: tempPacmanX,
        y: tempPacmanY,
      };
    }
    else if (tempGrid[tempPacmanY - 1][tempPacmanX] !== GridTile.Wall) {
      if (tempGrid[tempPacmanY - 1][tempPacmanX] === GridTile.Coin) {
        tempScore = tempScore + 1;
      }
      tempGrid[tempPacmanY][tempPacmanX] = GridTile.Ground;
      tempPacmanY = tempPacmanY - 1;
      tempGrid[tempPacmanY][tempPacmanX] = GridTile.Pacman;
    }
  } else if (keyPressCode === 39) { // PACMAN MOVE RIGHT
    if (tempGrid[tempPacmanY][tempPacmanX + 1] === GridTile.Ghost1 ||
      tempGrid[tempPacmanY][tempPacmanX + 1] === GridTile.Ghost2 ||
      tempGrid[tempPacmanY][tempPacmanX + 1] === GridTile.Ghost3 ||
      tempGrid[tempPacmanY][tempPacmanX + 1] === GridTile.Ghost4) {
      tempStatus = Status.Over;
      return {
        g1Previous: ghost1Previous,
        g1X: ghost1X,
        g1Y: ghost1Y,
        g2Previous: ghost2Previous,
        g2X: ghost2X,
        g2Y: ghost2Y,
        g3Previous: ghost3Previous,
        g3X: ghost3X,
        g3Y: ghost3Y,
        g4Previous: ghost4Previous,
        g4X: ghost4X,
        g4Y: ghost4Y,
        grid: tempGrid,
        score: tempScore,
        status: tempStatus,
        x: tempPacmanX,
        y: tempPacmanY,
      };
    }
    else if (tempGrid[tempPacmanY][tempPacmanX + 1] !== GridTile.Wall) {
      if (tempGrid[tempPacmanY][tempPacmanX + 1] === GridTile.Coin) {
        tempScore = tempScore + 1;
      }
      tempGrid[tempPacmanY][tempPacmanX] = GridTile.Ground;
      tempPacmanX = tempPacmanX + 1;
      tempGrid[tempPacmanY][tempPacmanX] = GridTile.Pacman;
    }
  } else if (keyPressCode === 40) { // PACMAN MOVE DOWN
    if (tempGrid[tempPacmanY + 1][tempPacmanX] === GridTile.Ghost1 ||
      tempGrid[tempPacmanY + 1][tempPacmanX] === GridTile.Ghost2 ||
      tempGrid[tempPacmanY + 1][tempPacmanX] === GridTile.Ghost3 ||
      tempGrid[tempPacmanY + 1][tempPacmanX] === GridTile.Ghost4) {
      tempStatus = Status.Over;
      return {
        g1Previous: ghost1Previous,
        g1X: ghost1X,
        g1Y: ghost1Y,
        g2Previous: ghost2Previous,
        g2X: ghost2X,
        g2Y: ghost2Y,
        g3Previous: ghost3Previous,
        g3X: ghost3X,
        g3Y: ghost3Y,
        g4Previous: ghost4Previous,
        g4X: ghost4X,
        g4Y: ghost4Y,
        grid: tempGrid,
        score: tempScore,
        status: tempStatus,
        x: tempPacmanX,
        y: tempPacmanY,
      };
    }
    else if (tempGrid[tempPacmanY + 1][tempPacmanX] !== GridTile.Wall) {
      if (tempGrid[tempPacmanY + 1][tempPacmanX] === GridTile.Coin) {
        tempScore = tempScore + 1;
      }
      tempGrid[tempPacmanY][tempPacmanX] = GridTile.Ground;
      tempPacmanY = tempPacmanY + 1;
      tempGrid[tempPacmanY][tempPacmanX] = GridTile.Pacman;
    }
  }

  if (!(tempPacmanX === state.pacmanX && tempPacmanY === state.pacmanY)) {
    let tempNodeGrid = new Grid(tempGrid);
    let astar = new Astar(tempNodeGrid);
    const pathG1 = astar.findPath([ghost1X, ghost1Y], [tempPacmanX, tempPacmanY]);
    if (!(pathG1 === undefined || pathG1.length === 0)) {
      const futureGhost1 = pathG1[1];
      if (tempGrid[futureGhost1[1]][futureGhost1[0]] === GridTile.Pacman) {
        tempStatus = Status.Over;
        return {
          g1Previous: ghost1Previous,
          g1X: ghost1X,
          g1Y: ghost1Y,
          g2Previous: ghost2Previous,
          g2X: ghost2X,
          g2Y: ghost2Y,
          g3Previous: ghost3Previous,
          g3X: ghost3X,
          g3Y: ghost3Y,
          g4Previous: ghost4Previous,
          g4X: ghost4X,
          g4Y: ghost4Y,
          grid: tempGrid,
          score: tempScore,
          status: tempStatus,
          x: tempPacmanX,
          y: tempPacmanY,
        };
      } else {
        tempGrid[ghost1Y][ghost1X] = setPrevious(state, tempGrid, ghost1Previous, 1);
        ghost1Previous = tempGrid[futureGhost1[1]][futureGhost1[0]];
        tempGrid[futureGhost1[1]][futureGhost1[0]] = GridTile.Ghost1;
        ghost1X = futureGhost1[0];
        ghost1Y = futureGhost1[1];
      }
    }
    tempNodeGrid = new Grid(tempGrid);
    astar = new Astar(tempNodeGrid);
    const pathG2 = astar.findPath([ghost2X, ghost2Y], [tempPacmanX, tempPacmanY]);
    if (!(pathG2 === undefined || pathG2.length === 0)) {
      const futureGhost2 = pathG2[1];
      if (tempGrid[futureGhost2[1]][futureGhost2[0]] === GridTile.Pacman) {
        tempStatus = Status.Over;
        return {
          g1Previous: ghost1Previous,
          g1X: ghost1X,
          g1Y: ghost1Y,
          g2Previous: ghost2Previous,
          g2X: ghost2X,
          g2Y: ghost2Y,
          g3Previous: ghost3Previous,
          g3X: ghost3X,
          g3Y: ghost3Y,
          g4Previous: ghost4Previous,
          g4X: ghost4X,
          g4Y: ghost4Y,
          grid: tempGrid,
          score: tempScore,
          status: tempStatus,
          x: tempPacmanX,
          y: tempPacmanY,
        };
      } else {
        tempGrid[ghost2Y][ghost2X] = setPrevious(state, tempGrid, ghost2Previous, 2);
        ghost2Previous = tempGrid[futureGhost2[1]][futureGhost2[0]];
        tempGrid[futureGhost2[1]][futureGhost2[0]] = GridTile.Ghost2;
        ghost2X = futureGhost2[0];
        ghost2Y = futureGhost2[1];
      }
    }
    tempNodeGrid = new Grid(tempGrid);
    astar = new Astar(tempNodeGrid);
    const pathG3 = astar.findPath([ghost3X, ghost3Y], [tempPacmanX, tempPacmanY]);
    if (!(pathG3 === undefined || pathG3.length === 0)) {
      const futureGhost3 = pathG3[1];
      if (tempGrid[futureGhost3[1]][futureGhost3[0]] === GridTile.Pacman) {
        tempStatus = Status.Over;
        return {
          g1Previous: ghost1Previous,
          g1X: ghost1X,
          g1Y: ghost1Y,
          g2Previous: ghost2Previous,
          g2X: ghost2X,
          g2Y: ghost2Y,
          g3Previous: ghost3Previous,
          g3X: ghost3X,
          g3Y: ghost3Y,
          g4Previous: ghost4Previous,
          g4X: ghost4X,
          g4Y: ghost4Y,
          grid: tempGrid,
          score: tempScore,
          status: tempStatus,
          x: tempPacmanX,
          y: tempPacmanY,
        };
      } else {
        tempGrid[ghost3Y][ghost3X] = setPrevious(state, tempGrid, ghost3Previous, 3);
        ghost3Previous = tempGrid[futureGhost3[1]][futureGhost3[0]];
        tempGrid[futureGhost3[1]][futureGhost3[0]] = GridTile.Ghost3;
        ghost3X = futureGhost3[0];
        ghost3Y = futureGhost3[1];
      }
    }
    tempNodeGrid = new Grid(tempGrid);
    astar = new Astar(tempNodeGrid);
    const pathG4 = astar.findPath([ghost4X, ghost4Y], [tempPacmanX, tempPacmanY]);
    if (!(pathG4 === undefined || pathG4.length === 0)) {
      const futureGhost4 = pathG4[1];
      if (tempGrid[futureGhost4[1]][futureGhost4[0]] === GridTile.Pacman) {
        tempStatus = Status.Over;
        return {
          g1Previous: ghost1Previous,
          g1X: ghost1X,
          g1Y: ghost1Y,
          g2Previous: ghost2Previous,
          g2X: ghost2X,
          g2Y: ghost2Y,
          g3Previous: ghost3Previous,
          g3X: ghost3X,
          g3Y: ghost3Y,
          g4Previous: ghost4Previous,
          g4X: ghost4X,
          g4Y: ghost4Y,
          grid: tempGrid,
          score: tempScore,
          status: tempStatus,
          x: tempPacmanX,
          y: tempPacmanY,
        };
      } else {
        tempGrid[ghost4Y][ghost4X] = setPrevious(state, tempGrid, ghost4Previous, 4);
        ghost4Previous = tempGrid[futureGhost4[1]][futureGhost4[0]];
        tempGrid[futureGhost4[1]][futureGhost4[0]] = GridTile.Ghost4;
        ghost4X = futureGhost4[0];
        ghost4Y = futureGhost4[1];
      }
    }

  }

  return {
    g1Previous: ghost1Previous,
    g1X: ghost1X,
    g1Y: ghost1Y,
    g2Previous: ghost2Previous,
    g2X: ghost2X,
    g2Y: ghost2Y,
    g3Previous: ghost3Previous,
    g3X: ghost3X,
    g3Y: ghost3Y,
    g4Previous: ghost4Previous,
    g4X: ghost4X,
    g4Y: ghost4Y,
    grid: tempGrid,
    score: tempScore,
    status: tempStatus,
    x: tempPacmanX,
    y: tempPacmanY,
  };
}

function setPrevious(state: IStoreState, grid: number[][], previous: number, ghost: number): number {
  switch (previous) {
    case GridTile.Ghost1:
      return setPrevious(state, grid, state.ghost1Previous, 1);
    case GridTile.Ghost2:
      return setPrevious(state, grid, state.ghost2Previous, 2);
    case GridTile.Ghost3:
      return setPrevious(state, grid, state.ghost3Previous, 3);
    case GridTile.Ghost4:
      return setPrevious(state, grid, state.ghost4Previous, 4);
    default:
      switch (ghost) {
        case 1:
          return state.ghost1Previous;
        case 2:
          return state.ghost2Previous;
        case 3:
          return state.ghost3Previous;
        case 4:
          return state.ghost4Previous;
      }
  }
  return GridTile.Ground;

}
