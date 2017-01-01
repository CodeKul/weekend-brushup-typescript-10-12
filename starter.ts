import { Auto } from './interfaces/auto';
import { Machine } from './inheritance/machine';
import { Motor } from './inheritance/motor';
import { Mobile } from './inheritance/mobile';
import { Device } from './inheritance/device';
import { Car } from './classes-objects/car';
import { Animal } from './abstractclasses/animal';
import { Tiger } from './abstractclasses/tiger';

export class Starter {

    public classesAndObjects(): void {

        let car: Car = new Car(10);
        console.log(`Increased Speed is ${car.increaseSpeed()}`);
        car.increaseSpeedBy(10);
    }

    public inheritance(): void {

        let device: Device = new Device('India', 15, 5);
        console.log(`Device Battery Level - ${device.batteryLevel()}`);

        let mobile: Mobile = new Mobile(true);
        console.log(`Mobile Battery Level - ${mobile.batteryLevel()}`);

        let deviceMobile: Device = new Mobile(true);

        let mobileDevice: Mobile = new Device('India', 15, 5);
        console.log(`Mobile Device Battery Level - ${mobileDevice.batteryLevel()}`);

        let machine: Machine = new Machine(10, 0, 20);
    }

    public abstractClasses(): void {
        let animal: Animal = new Tiger();
        animal.walk();

        let tiger = new Tiger();
        tiger.walk();
    }

    public interfaces() {
        let auto: Auto = new Auto();
        auto.capcity();
        auto.kms();
        auto.light();
        auto.location();
    }

    public loops() {
        let arr = [];
        arr.push('Android');
        arr.push('Apple');
        arr.push('Java');
        arr.push('TypeScript');
        arr.push('Node');

        arr.forEach((s, i) => console.log(`S is ${s} index is ${i}`));
    }
}