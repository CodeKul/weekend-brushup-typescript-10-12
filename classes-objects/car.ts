export class Car {
    //private speed : number; // state
    //private color : string;

    public constructor(private speed? : number, private color? : string) {
        //this.speed = speed;
        //this.color = color;
    }
    public increaseSpeed() : number {
        return this.speed += 5;
    }

    public increaseSpeedBy(speed : number) : number {
        return this.speed += speed;
    }
}