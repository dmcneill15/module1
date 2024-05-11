//Exercise 6

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

//end of Exercise 6



//-------------------------------------
//class example with array of objects
let products = [
    {
        productId: 101,
        productName: "Toyota Corolla",
        color: "red",
        category: "car",
        price: 10000
    },
    {
        productId: 102,
        productName: "Toyota Highlander",
        color: "white",
        category: "automobile",
        price: 20000
    },
    {
        productId: 103,
        productName: "Toyota Auris",
        color: "black",
        category: "automobile",
        price: 30000
    },
    {
        productId: 103,
        productName: "Toyota Prius",
        color: "black",
        category: "car",
        price: 20000
    }
]

console.log("----------------")
console.log("Total products: ", products.length);

//fetch one product from the list(p)
//compare the products category and see ifs category matches 'car'
//if not,it forgets the product
//if yes, store the product in the arraye of filtered products
const carProducts = products.filter(p => p.category == 'car'); 
console.log("Number of car products: ", carProducts.length);

const carProducts2 = products.filter(p => p.category == 'car' && p.color == 'black'); 
console.log("Number of products that are black cars: ", carProducts2.length);

const carProducts3 = products.filter(p => isCarProduct(p) && isRed(p));
console.log("Number of products that are red cars: ", carProducts3.length);
console.log("Number of products that are red cars: ", carProducts3.productName); //not working - returns undefined.

function isCarProduct(p){
    return p.category == 'car';
}

function isRed(p){
    return p.color == 'red';
}