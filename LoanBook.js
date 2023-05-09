//Prototype design pattern
export class LoanBook {
    constructor(book, user, loanDate, loanReturn) {
        this.book = book;
        this.user = user;
        this.loanDate = loanDate;
        this.loanReturn = loanReturn;
    }

    clone() {
        return new LoanBook(
            Object.assign({}, this.book),
            Object.assign({}, this.user),
            this.loanDate,
            this.loanReturn
        );
    }
}