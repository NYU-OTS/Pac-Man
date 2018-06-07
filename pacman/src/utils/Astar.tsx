// In Progress
import { Grid } from './Grid';
import { getManhattanDistance } from './Heuristic';
import { Node } from './Node';



export class Astar {

    /* Grid and grid relevant data */
    private nodeGrid: Grid;
    private gridWidth: number;
    private gridHeight: number;

    /* AStar-Finder Lists */
    private openList: Node[];
    private closedList: Node[];

    /* Pathway variables */
    private movementCost: number;

    constructor(grid: Grid) {

        /* Get grid with grid relevant data */
        this.nodeGrid = grid;
        this.gridWidth = grid.getGridWidth();
        this.gridHeight = grid.getGridHeight();

        /* Init AStar-Finder Lists */
        this.openList = [];
        this.closedList = [];

        /* Init pathway variables */
        this.movementCost = 10;
    }

    public getMapArray(): Node[][] { return this.nodeGrid.getGrid(); }

    public findPath(startPosition: number[], endPosition: number[]): number[][] {

        const startX = startPosition[0];
        const startY = startPosition[1];
        const endX = endPosition[0];
        const endY = endPosition[1];

        let neighbors: Node[] = [];
        let nodePositionWithLowestFValue: number[] = [];

        const startNode = this.nodeGrid.getNodeAt(startX, startY);
        const endNode = this.nodeGrid.getNodeAt(endX, endY);
        let currentNode: Node = startNode;
        const abs = Math.abs;


        /* START NODE */
        /* Set FGH-Value to zero */
        startNode.setG(0);
        startNode.setH(0);
        startNode.setF();

        /* Push start node into open list */
        startNode.setIsOnOpenList(true);
        this.openList.push(startNode);

        /* Break if start and/or goal position is/are not walkable */
        if (!this.nodeGrid.isWalkableAt(endX, endY) || !this.nodeGrid.isWalkableAt(startX, startY)) {
            global.console.log("ERROR: Path could not be created. Start and/or Goal position is not walkable. ");
            return [];
        }

        for (let y: number = 0; y < this.gridHeight; y++) {
            for (let x: number = 0; x < this.gridWidth; x++) {

                /* If NOT walkable */
                if (!this.nodeGrid.isWalkableAt(x, y)) {

                    /* Set FGH-Values to zero */
                    this.nodeGrid.getNodeAt(x, y).setG(0);
                    this.nodeGrid.getNodeAt(x, y).setH(0);
                    this.nodeGrid.getNodeAt(x, y).setF();

                    /* Put on closed list */
                    this.nodeGrid.getNodeAt(x, y).setIsOnCloseList(true);
                    this.closedList.push(this.nodeGrid.getNodeAt(x, y));
                }


            }
        }


        while (!(this.openList === undefined || this.openList.length === 0)) {

            /* get node with lowest f value */
            nodePositionWithLowestFValue = [ this.findMin(this.openList).getX(), this.findMin(this.openList).getY()];
            currentNode = this.nodeGrid.getNodeAt(nodePositionWithLowestFValue[0], nodePositionWithLowestFValue[1]);

            /* Remove new field from open list and put into closed list */
            currentNode.setIsOnOpenList(false);
            currentNode.setIsOnCloseList(true);

            this.removeNode(this.openList, currentNode);
            this.closedList.push(currentNode);


            /* end of path is reached */
            if (currentNode === endNode) {
                global.console.log("Path created. ");
                return this.backtrace(endNode);
            }

            /* get neighbors */
            neighbors = this.nodeGrid.getSurroundingNodes(currentNode.getX(), currentNode.getY());

            for (const neightbor of neighbors) {

                /* continue if node on closed list */
                if (neightbor.getIsOnClosedList()) {
                    continue;
                }

                const xPos = neightbor.getX();
                const yPos = neightbor.getY();

                const xEndPos = endNode.getX();
                const yEndPos = endNode.getY();

                /* calculate the g score of the neightbor */
                const nextGValue = currentNode.getG() + this.movementCost;

                /* is the neighbor not on open list OR */
                /* can it be reached with lower g value from current position */
                if (!neightbor.getIsOnOpenList() || nextGValue < neightbor.getG()) {

                    neightbor.setG(nextGValue);
                    neightbor.setH(getManhattanDistance(abs(xPos - xEndPos), abs(yPos - yEndPos)) * this.movementCost);
                    neightbor.setF();
                    neightbor.setParent(currentNode);

                    if (!neightbor.getIsOnOpenList()) {
                        neightbor.setIsOnOpenList(true);
                        this.openList.push(neightbor);
                    }

                    else {
                        /* okay this is a better way, so change the parent */
                        neightbor.setParent(currentNode);

                    }

                }

            }


        }

        global.console.log("ERROR: Path could not be created. ");
        return [];

    }

    private removeNode(list: Node[], element: Node): Node[] {
        for(let i=0; i< list.length ; i++)
        {
            if(element === list[i])
            {
                list.splice(i,1);
            }
        }

        return list;
    }

    private findMin(list: Node[]): Node {
        let minF: number = Number.POSITIVE_INFINITY;
        let minNode: Node = list[0];
        for (const item of list)
        {
            if (item.getF() < minF)
            {
                minF = item.getF();
                minNode = item;
            }
        }
        return minNode;
    }
    private backtrace(node: Node): number[][] {
        const path: number[][] = [];
        let currentNode = node;

        while (currentNode.getParent()) {
            path.push([currentNode.getX(), currentNode.getY()]);
            const temp = currentNode.getParent();
            if (temp === undefined) {
                continue;
            }
            else {
                currentNode = temp;
            }

        }

        path.push([currentNode.getX(), currentNode.getY()]);

        return path.reverse();
    }
}


