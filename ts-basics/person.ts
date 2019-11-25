export class Person {

    constructor(private firstName : string = "", private lastName: string = "") {

    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    
    public getFirstName(): string {
        return this.firstName;
    }
    public setFirstName(value: string) {
        this.firstName = value;
    }

    public getLastName(): string {
        return this.lastName;
    }
    public setLastName(value: string) {
        this.lastName = value;
    }

}