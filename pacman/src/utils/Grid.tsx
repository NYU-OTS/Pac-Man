// In Progress
import { INodeConstructor, Node } from './Node'

export class Grid {

    private gridWidth: number;
    private gridHeight: number;
    private numberGrid: number[][];

    private nodeGrid: Node[][];

    constructor(numberGrid: number[][]) {
        this.gridHeight = numberGrid.length;
        this.gridWidth = numberGrid[0].length;
        this.numberGrid = numberGrid;

        // Creating a Node Grid
        this.nodeGrid = this.generateNodeGrid(this.numberGrid, this.gridHeight, this.gridWidth);
    }

    public getNodeAt(x: number, y: number): Node {
        return this.nodeGrid[y][x];
    }

    public isWalkableAt(x: number, y: number): boolean {
        return this.nodeGrid[y][x].getIsWalkable();
    }

    public getSurroundingNodes(currentXPos: number, currentYPos: number): Node[] {

        /* Local variables */
        const surroundingNodes: Node[] = [];


        for (let y = (currentYPos - 1); y < (currentYPos + 2); y++) {
            for (let x = (currentXPos - 1); x < (currentXPos + 2); x++) {
                if (this.isOnTheGrid(x, y)) {
                    if (this.isWalkableAt(x, y)) {
                        if (x === currentXPos && y === currentYPos) {
                            continue;
                        } else {
                            surroundingNodes.push(this.getNodeAt(x, y));
                        }
                    }
                    else {
                        continue;
                    }
                }
                else {
                    continue;
                }
            }
        }
        return surroundingNodes;
    }

    public getGrid(): Node[][] { return this.nodeGrid; }

    public getGridWidth(): number { return this.gridWidth; }

    public getGridHeight(): number { return this.gridHeight; }

    public cleanGrid(): void {
        for (let y = 0; y < this.gridHeight; y++) {
            for (let x = 0; x < this.gridWidth; x++) {
                this.nodeGrid[y][x].setIsOnCloseList(false);
                this.nodeGrid[y][x].setIsOnOpenList(false);
                this.nodeGrid[y][x].setParent(undefined);
            }
        }
    }

    private isOnTheGrid(x: number, y: number): boolean {
        return (x >= 0 && x < this.gridWidth) && (y >= 0 && y < this.gridHeight);
    }

    private generateNodeGrid(numberGrid: number[][], width: number, height: number) {

        const nodeGrid: Node[][] = [];
        const row: Node[] = [];
        let Id: number = 0;


        for (let Y = 0; Y < height; Y++) {
            nodeGrid[Y] = [];

            for (let X = 0; X < width; X++) {
                let walkable: boolean;
                if (numberGrid[Y][X] !== 1) {
                    walkable = true;
                }
                else {
                    walkable = false;
                }
                const params: INodeConstructor = {
                    id: Id,
                    isWalkable: walkable,
                    value: numberGrid[Y][X],
                    x: X,
                    y: Y,
                };
                row[X] = new Node(params);

                Id++;
            }
            nodeGrid[Y] = row;
        }

        return nodeGrid;
    }

}