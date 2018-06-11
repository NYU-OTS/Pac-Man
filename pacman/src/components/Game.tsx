import * as React from 'react';
import { GridTile, Status } from '../constants';
import './Game.css';

// Game Properties
interface IProps {
    grid: number[][];
    status: Status;
    score: number;

}

interface IAction {
    handleOnKeyPress: (event: KeyboardEvent) => void;
    clickToStart: () => void;
}

class Game extends React.Component<IProps & IAction> {

    // constructor(props: IProps) {
    //     super(props);
    // }

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
        else if (this.props.status === Status.InProgress) {
            return (
                <div>
                    <div className="score">
                        <p>Score: {this.props.score}  </p>
                    </div>
                    <div className="game">

                        {drawGrid(this.props.grid)}

                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="welcome">
                    <div className="title"><p>GAME OVER</p></div>
                    <div className="content">
                        <p>You scored: {this.props.score}/256 points</p>
                        <p onClick={this.props.clickToStart}>Click here to start a new game.</p>
                    </div>
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
            if (grid[i][j] === GridTile.Wall) {
                return (
                    <div className="wall" key={j} />
                );
            } else if (grid[i][j] === GridTile.Coin) {
                return (
                    <div className="coin" key={j} />
                );
            } else if (grid[i][j] === GridTile.Ground) {
                return (
                    <div className="ground" key={j} />
                );
            } else if (grid[i][j] === GridTile.Ghost1 || grid[i][j] === GridTile.Ghost2 || grid[i][j] === GridTile.Ghost3 || grid[i][j] === GridTile.Ghost4) {
                return (
                    <div className="ghost" key={j} />
                );
            } else if (grid[i][j] === GridTile.Pacman) {
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
