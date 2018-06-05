import * as React from 'react';
import { Status } from '../constants';
import { IStoreState } from '../types/index';
import './Game.css';

// Game Properties
export interface IProps extends React.Props<any> {
    grid: number[][];
    status: Status;
    handleOnKeyPress: (event: KeyboardEvent) => any;
    clickToStart: () => any;
}

class Game extends React.Component<IProps, IStoreState> {

    constructor(props: IProps) {
        super(props);
    }

    public componentDidMount() {
        window.addEventListener('keydown', event => this.props.handleOnKeyPress(event));
    }

    public render() {
        if (this.props.status === Status.YetToStart) {
            return (
                <div className="welcome">
                    <div className="title"><p>PAC-MAN</p></div>
                    <div className="content"> <p onClick={this.props.clickToStart}>Click here to start the game</p></div>
                </div>
            );
        }
        else {
            return (
                <div className="game">
                    {drawGrid(this.props.grid)}
                </div>
            );
        }

    }
}

export default Game;

// Helper Function to Draw the grid
function drawGrid(grid: number[][]) {
    const rows = grid.map((item: number[], i: number) => {
        const entry = item.map((element: number, j: number) => {
            if (grid[i][j] === 1) {
                return (
                    <div className="wall" key={j} />
                );
            } else if (grid[i][j] === 2) {
                return (
                    <div className="coin" key={j} />
                );
            } else if (grid[i][j] === 3) {
                return (
                    <div className="ground" key={j} />
                );
            } else if (grid[i][j] === 4) {
                return (
                    <div className="ghost" key={j} />
                );
            } else if (grid[i][j] === 5) {
                return (
                    <div className="pacman" key={j} />
                );
            }

            return (
                <div className="ground" key={i + j} />
            );

        });

        return (
            <div key={i}>{entry}</div>
        );
    });

    return (
        rows
    );
}
