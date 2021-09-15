function findAccountById(accounts, id) {
  const idMatch = accounts.find((account) => account.id === id);
  return idMatch;
}

function sortAccountsByLastName(accounts) {
  const sortByLastName = accounts.sort((userA, userB) => userA.name.last < userB.name.last ? -1 : 1);
  return sortByLastName;
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  for (let int = 0; int < books.length; int++){
    for (let intTwo = 0; intTwo < books[int].borrows.length; intTwo++){
      if (account.id === books[int].borrows[intTwo].id){
      totalBorrows += 1;
      }
    }
  }
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = books.filter((book) => account.id == book.borrows[0].id);
  for (let int = 0; int < authors.length; int++){
    if (result[0].authorId === authors[int].id){
      let match = authors[int]
        result[0].author = match
    }
  }
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
