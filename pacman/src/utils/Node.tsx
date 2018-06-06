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
    

    constructor(x: number, y: number, id: number, value: number) {
        // Setting the 2D grid properties
        this.x = x;
        this.y = y;
        this.id = id;
        this.value = value;

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

    // Setter Functions
    public setValue(value: number): void { this.value = value;}
    public setF(): void { this.f = this.g + this.h;}
    public setG(g: number): void { this.g = g;}
    public setH(h: number): void { this.h = h;}
    public setIsOnCloseList(isOnCloseList: boolean): void { this.isOnCloseList = isOnCloseList;}
    public setIsOnOpenList(isOnOpenList: boolean): void { this.isOnOpenList = isOnOpenList;}


}