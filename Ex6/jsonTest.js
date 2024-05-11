const book = {
    "title" : "Harry Potter",
    "description" : "This is the blurb of the book",
    "author" : "JK Rowling",
    "numOfPages" : 363
}

console.log(book.title);
console.log(book.numOfPages);

console.log(book);

book.description = "This book is about Harry Potter and the Goblet of Fire";
console.log(book["description"]);