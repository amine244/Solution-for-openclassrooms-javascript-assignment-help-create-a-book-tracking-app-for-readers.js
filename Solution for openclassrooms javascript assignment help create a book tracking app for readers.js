export class Book {
  constructor(title, author, description, pages, currentPage, read){
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = 1;//number - page the user is currently on (between 1 and pages)
    this.read = false;//read - boolean - whether the user has read the book or not (default: false)
  }
readBook(page){
  console.log('you are on' + this.currentPage + 'th page');//allows the user to say which page they are currently on
  if(page < 1 || page > this.pages){//if the page argument is less than one or more than the total number of pages of the book, readBook must return 0
    return 0;
  }else if(page >= 1 && page < this.pages){//if the page argument is greater than or equal to 1 and less than the total number of pages of the book, 
    this.currentPages = page;//readBook must set the instance's currentPage field to the value passed as an argument and return 1
    return 1;
  }else if(page == this.pages){//if the page argument is equal to the total number of pages of the book, readBook must set the instance's currentPage field to the 
    this.currentPages = page;//value passed as an argument, set the instance's read field to true, and return 1
    this.read = true;
    return 1;
    }
  }
}
//create at least three valid instances of it and place them inside the exported books Array.
const firstBook = new Book ('The Beginning', 'Jane Smith', 'mystery novel', 300, 297, true);
const secondBook = new Book ('The mystery continues', 'Amir Gaballah and Jane Smith', 'mystery novel', 300, 298, true);
const thrirdBook = new Book ('the critical point', 'John Doe', 'mystery novel', 300, 259, true);


export const books = [firstBook, secondBook, thrirdBook];
