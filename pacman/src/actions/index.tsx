import * as constants from '../constants';

// Action Interface
export interface IKeyPress {
    type: constants.KEY_PRESS;
    keyPressCode: number;
}

export interface IStartGame {
    type: constants.START_GAME;
}

export type NavigateAction = IKeyPress | IStartGame;

// Action Creators
export function keyPress(event: KeyboardEvent): IKeyPress {
    return {
        keyPressCode: event.keyCode,
        type: constants.KEY_PRESS,
    };
}

export function startGame(): IStartGame {
    return {
        type: constants.START_GAME,
    };
}