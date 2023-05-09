
//builder design pattern
export class Book {
    constructor(title, author, year, edit) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.edit = edit;
    }
}

class BookBuilder {
    constructor() {
        this.title = '';
        this.author = '';
        this.year = '';
        this.edit = '';
    }

    withTitlu(title) {
        this.title = title;
        return this;
    }

    withAutor(author) {
        this.author = author;
        return this;
    }

    withAnPublicare(year) {
        this.year = year;
        return this;
    }

    withEditura(edit) {
        this.edit = edit;
        return this;
    }

    build() {
        return new Book(
            this.title,
            this.author,
            this.year,
            this.edit
        );
    }
}