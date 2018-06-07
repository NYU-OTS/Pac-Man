import {Status} from '../constants';

export interface IStoreState {
    // TODO: Add functionality for ghosts
    score: number;
    status: Status;
    ghost1X: number,
    ghost1Y: number,
    ghost1Previous: number;
    ghost2X: number,
    ghost2Y: number,
    ghost2Previous: number;
    ghost3X: number,
    ghost3Y: number,
    ghost3Previous: number;
    ghost4X: number,
    ghost4Y: number,
    ghost4Previous: number;
    grid: number[][];
    pacmanX: number;
    pacmanY: number;
}