
import * as constants from '../constants';

// Action Interface
export interface MoveUp {
    type: constants.MOVE_UP;
}

export interface MoveDown {
    type: constants.MOVE_DOWN;
}

export interface MoveLeft {
    type: constants.MOVE_LEFT;
}

export interface MoveRight {
    type: constants.MOVE_RIGHT;
}

export type NavigateAction = MoveUp | MoveDown | MoveLeft | MoveRight;

// Action Creators
export function moveUp(): MoveUp {
    return {
        type: constants.MOVE_UP
    };
}

export function moveDown(): MoveDown {
    return {
        type: constants.MOVE_DOWN
    };
}

export function moveLeft(): MoveLeft {
    return {
        type: constants.MOVE_LEFT
    };
}

export function moveRight(): MoveRight {
    return {
        type: constants.MOVE_RIGHT
    };
}