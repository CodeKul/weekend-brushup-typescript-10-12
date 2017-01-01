import { Lpg } from './lpg';
import { Gps } from './gps';

export class Auto implements Gps{

    public location() {
        return 'India';
    }

    public light() {
        return 5;
    }

    public kms() {

    }

    public capcity() {
        return 15;
    }
}