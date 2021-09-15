function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  let returned = books.filter((book) => book.borrows[0].returned === true);
  let status = [];
  status.push(borrowed, returned);
  return status;  
}

function getBorrowersForBook(book, accounts) {
  let borrowers = []
  for (let int = 0; int < book.borrows.length; int++){
    for (let intTwo=0; intTwo < accounts.length; intTwo++){
      if (book.borrows[int].id === accounts[intTwo].id && int < 10){
        accounts[intTwo] = {...accounts[intTwo],...book.borrows[int]}
        borrowers.push(accounts[intTwo])
    }
   }
  } 
 return borrowers 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
