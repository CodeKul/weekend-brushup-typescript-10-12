export class Device {
    public constructor(private producer : string,private battery : number, private life : number){
    }

    public batteryLevel() : number {
        return this.battery;
    }
}

export const i = 10;