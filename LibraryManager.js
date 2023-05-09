import { LoanBook } from "./LoanBook.js";
//SINGLETON
export class LibraryManager {
    constructor() {
        if (LibraryManager.instance) {
            return LibraryManager.instance;
        }
        LibraryManager.instance = this;

        this.books = [];
        this.users = [];
        this.loans = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    addUser(user) {
        this.users.push(user);
    }

    findUser(userName) {
        return this.users.find(user => user.firstName === userName);
    }

    loanBook(book, user, loanDate, loanReturn) {
        const loan = new LoanBook(book, user, loanDate, loanReturn);
        this.loans.push(loan);
    }

    showBooks() {
        console.log('Available Books:');
        this.books.forEach(books => console.log(`- ${books.title} de ${books.author}`));
    }

    printUsers() {
        console.log('Users:');
        this.users.forEach(users => console.log(`- ${users.lastName} ${users.firstName}`));
    }

}
