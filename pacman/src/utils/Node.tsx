export interface INodeConstructor {
    id: number;
    x: number;
    y: number,
    value: number,
    isWalkable: boolean,
}


export class Node {

    // Parent Node
    public parent?: Node;

    // Properties from the 2D Grid
    private x: number;
    private y: number;
    private id: number;
    private value: number;

    // Properties need for A Star algorithm
    private f: number;
    private g: number;
    private h: number;
    private isOnCloseList: boolean;
    private isOnOpenList: boolean;
    private isWalkable: boolean;
    

    constructor( params: INodeConstructor) {
        // Setting the 2D grid properties
        this.x = params.x;
        this.y = params.y;
        this.id = params.id;
        this.value = params.value;
        this.isWalkable = params.isWalkable;

        // Setting the properties needed for A star
        this.f = 0;
        this.h = 0;
        this.g = 0;
        this.isOnCloseList = false;
        this.isOnOpenList = false;
        this.parent = undefined;
    }

    // Getter functions
    public getX(): number { return this.x; }
    public getY(): number { return this.y; }
    public getId(): number { return this.id; }
    public getValue(): number { return this.value; }
    public getF(): number { return this.f; }
    public getG(): number { return this.g; }
    public getH(): number { return this.h; }
    public getIsOnClosedList(): boolean { return this.isOnCloseList; }
    public getIsOnOpenList(): boolean { return this.isOnOpenList; }
    public getIsWalkable(): boolean { return this.isWalkable; }
    public getParent(): (Node | undefined) { return this.parent; }

    // Setter Functions
    public setValue(value: number): void { this.value = value;}
    public setF(): void { this.f = this.g + this.h;}
    public setG(g: number): void { this.g = g;}
    public setH(h: number): void { this.h = h;}
    public setIsOnCloseList(isOnCloseList: boolean): void { this.isOnCloseList = isOnCloseList;}
    public setIsOnOpenList(isOnOpenList: boolean): void { this.isOnOpenList = isOnOpenList;}
    public setIsWalkable(isWalkable: boolean): void { this.isWalkable = isWalkable;}
    public setParent(parent: (Node| undefined)): void { this.parent = parent; }


}