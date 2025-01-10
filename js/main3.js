const library = {
    books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee", publicationDate: "1960" },
        { title: "1984", author: "George Orwell", publicationDate: "1949" },
        { title: "Pride and Prejudice", author: "Jane Austen", publicationDate: "1813" },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationDate: "1925" }
    ]
};

function getBookTitles(jsonObject) {
    return jsonObject.books.map(book => book.title);
}

const bookTitles = getBookTitles(library);

console.log("Book Titles:", bookTitles);
