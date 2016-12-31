export class Calc {
    public sum(num1 : number, num2 : number) : number{

        let result : number = num1+num2;
        //console.log('Addition is of'+(result));
        console.log(`Addition is ${result}`);

        return result;
    }
}

let c  = new Calc();
c.sum(45,45);

