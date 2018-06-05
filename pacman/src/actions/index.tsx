import * as constants from '../constants';

// Action Interface
export interface IKeyPress {
    type: constants.KEY_PRESS;
    keyPressCode: number;
}

export type NavigateAction = IKeyPress;

// Action Creators
export function keyPress(event: KeyboardEvent): IKeyPress {
    return {
        keyPressCode: event.keyCode,
        type: constants.KEY_PRESS,
    };
}