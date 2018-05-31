import * as React from 'react';
import './Game.css';

// Game Properties
export interface Props {
    grid: number[][];
    onMoveUp?: () => void;
    onMoveDown?: () => void;
    onMoveLeft?: () => void;
    onMoveRight?: () => void;

}

function Game({ grid, onMoveUp, onMoveDown, onMoveLeft, onMoveRight }: Props) {
    let output = drawGrid(grid);
    return (
        <div className="game">
            <div> {drawGrid(grid)} </div>
        </div>
    );
}

export default Game;

// Helper Function to Draw the grid
function drawGrid(grid: number[][]) {
    var rows = grid.map(function (item: number[], i: number) {
        var entry = item.map(function (element: number, j: number) {
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
