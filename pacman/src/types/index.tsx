import {Status} from '../constants';

export interface IStoreState {
    // TODO: Add functionality for ghosts
    score: number;
    status: Status;
    grid: number[][];
    pacmanX: number;
    pacmanY: number;
}