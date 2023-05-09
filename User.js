//Factory Method design pattern
export class User {
    constructor(numberCard, lastName, firstName, address) {
        this.numberCard = numberCard;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
    }
}

class UsersFactory {
    static create(numberCard, lastName, firstName, address) {
        return new User(numberCard, lastName, firstName, address);
    }
}