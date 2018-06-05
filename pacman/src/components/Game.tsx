import * as React from 'react';
import { IStoreState } from '../types/index';
import './Game.css';

// Game Properties
export interface IProps extends React.Props<any> {
    grid: number[][];
    handleOnKeyPress: (event: KeyboardEvent) => any;
}

class Game extends React.Component<IProps, IStoreState> {

    constructor(props: IProps) {
        super(props);
    }

    public componentDidMount() {
        window.addEventListener('keydown', event => this.props.handleOnKeyPress(event) );
      }

    public render() {
        return(
            <div className="game">
                 {drawGrid(this.props.grid)}
            </div>
        );
    }
}

export default Game;

// Helper Function to Draw the grid
function drawGrid(grid: number[][]) {
    const rows = grid.map((item: number[], i: number)=> {
        const entry = item.map((element: number, j: number) => {
            if (grid[i][j] === 1) {
                return (
                    <div className="wall" key={j}/>
                );
            } else if (grid[i][j] === 2) {
                return (
                    <div className="coin" key={j}/>
                );
            } else if (grid[i][j] === 3) {
                return (
                    <div className="ground" key={j}/>
                );
            } else if (grid[i][j] === 4) {
                return (
                    <div className="ghost" key={j}/>
                );
            } else if (grid[i][j] === 5) {
                return (
                    <div className="pacman" key={j}/>
                );
            }

            return (
                <div className="ground"  key={i + j}/>
            );

        });
    
        return (
            <div key={i}>{entry}</div>
        );
    });

    return(
        rows
    );
}