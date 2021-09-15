function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksBorrowed = 0;
  for (let int = 0; int < books.length; int++){
    if (books[int].borrows[0].returned === false){
      booksBorrowed ++;  
    }
  }
  return booksBorrowed;
}

function sortAndLimit(result) { 
  result.sort((valueA , valueB) => (valueA.count < valueB.count? 1: -1));
  
  let limitFive = result.slice(0, 5);
  return limitFive;
} 

function getMostCommonGenres(books) {
  let topics = []; 
  let commonGenres = books.map(book => book.genre).reduce(function (allGenres, genres) {
 
  if (topics.includes(genres)) {
    for (let int = 0; int < books.length; int ++){
      if (allGenres[int].name === genres){
        allGenres[int].count += 1;
        return allGenres;
      }
    }
  }
  else {
    let obj = {}
    obj["name"] = genres,
    obj["count"] = 1
    allGenres.push(obj);
    topics.push(genres);
  }
  return allGenres
}, []);  
 
return sortAndLimit(commonGenres);
}
                                                          
function getMostPopularBooks(books) {
let popularBooks = books.map(book => book.title).reduce(function (allTitles, titles, int) {

    let obj = {}
    obj["name"] = titles,
    obj["count"] = books[int].borrows.length
    allTitles.push(obj);
   
  return allTitles
}, []);  

return sortAndLimit(popularBooks);
}


function getMostPopularAuthors(books, authors) {
let authorsArray = []
let countedNames = books.reduce(function (allTitles, titles) {

  if (authorsArray.includes(titles.authorId)) {
    for (let int = 0; int < allTitles.length; int ++){
      if (allTitles[int].name === titles.authorId){
        allTitles[int].count += titles.borrows.length;
        return allTitles;
      }
    }
  } 
    
    let obj = {}
    obj["name"] = titles.authorId,
    obj["count"] = titles.borrows.length
    allTitles.push(obj);
    authorsArray.push(titles.authorId);
 
  return allTitles;
}, []);  
  
  countedNames.reduce((acc, name) => {
    for (let int = 0; int < authors.length; int ++){
      if (name.name === authors[int].id){
        name.name = (authors[int].name.first + " " + authors[int].name.last);
      }
      
  }
    return acc;
  }, []);
 
return sortAndLimit(countedNames);  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
