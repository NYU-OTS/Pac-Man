import {Status} from '../constants';

export interface IStoreState {
    // TODO: Add functionality for ghosts
    status: Status;
    grid: number[][];
    pacmanX: number;
    pacmanY: number;
}