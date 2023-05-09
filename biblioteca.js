import { Book } from "./BookBuilder.js";
import { User } from "./User.js";
import { LibraryManager } from "./LibraryManager.js";


const carte1 = new Book('orice', 'oricine', 1111, 'orice');
const carte2 = new Book('orice1', 'oricine1', 2222, 'orice1');
const carte3 = new Book('orice2', 'oricine2', 3333, 'orice2');
const utilizator1 = new User(1, 'utilizator1', 'uti1', 'AD1');
const utilizator2 = new User(2, 'utilizator2', 'uti2', 'AD2');


const biblioteca = new LibraryManager();

// Adaugam obiectele create in biblioteca
biblioteca.addBook(carte1);
biblioteca.addBook(carte2);
biblioteca.addBook(carte3);
biblioteca.addUser(utilizator1);
biblioteca.addUser(utilizator2);
biblioteca.showBooks();
biblioteca.printUsers();
biblioteca.showBooks();
