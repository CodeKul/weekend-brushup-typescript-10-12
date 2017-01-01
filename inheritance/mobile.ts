import { Device } from './device';

export class Mobile extends Device {

    public constructor(private isTouch? : boolean) {
        super('India',100,5);
    }

    public batteryLevel(): number {
        return super.batteryLevel() + 10;
    }
}