import {Book} from "./Book";

let book1 = new Book('The Design of EveryDay Things', 'Don Norman', false);
let book2 = new Book('The Most Human Human', 'Brian Christian', true);

let bookList: Book[] = [];
bookList.push(book1, book2);

bookList.forEach((book) => {
    let bookInfor = book.title + ' by ' + book.author;
    if (book.alreadyRead) {
        console.log('You already read "' + bookInfor);
    } else {
        console.log('You still need to read "' + bookInfor);
    }
});
