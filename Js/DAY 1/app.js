//DOM
/*function addLang(langName){
    const li=document.createElement('li')
    li.innerHTML=`${langName}`
    document.querySelector('.lang').appendChild(li)
}
addLang('Java')
addLang("Ruby")

const secLang=document.querySelector('li:nth-child(2)')
const newlang=document.createElement("li")
newlang.innerHTML="Mojo"
secLang.replaceWith(newlang)
//  console.log(newlang.innerHTML);

const removelast=document.querySelector('li:last-child')
removelast.remove();*/
 
//FILTER
// const myNum=[1,2,3,,4,5,6,7]
// const newNum=num.filter((num)=>num>4)
// console.log(newNum);


/*const books = [
    {
      bookName: "To Kill a Mockingbird",
      authorName: "Harper Lee",
      genre: "Fiction",
      publicationDate: "1960-07-11"
    },
    {
      bookName: "1984",
      authorName: "George Orwell",
      genre: "Dystopian",
      publicationDate: "1949-06-08"
    },
    {
      bookName: "The Great Gatsby",
      authorName: "F. Scott Fitzgerald",
      genre: "Classic",
      publicationDate: "1925-04-10"
    },
    {
      bookName: "Pride and Prejudice",
      authorName: "Jane Austen",
      genre: "Romance",
      publicationDate: "1813-01-28"
    },
    {
      bookName: "Moby-Dick",
      authorName: "Herman Melville",
      genre: "Adventure",
      publicationDate: "1851-10-18"
    },
    {
      bookName: "War and Peace",
      authorName: "Leo Tolstoy",
      genre: "Historical Fiction",
      publicationDate: "1869-01-01"
    },
    {
      bookName: "The Catcher in the Rye",
      authorName: "J.D. Salinger",
      genre: "Fiction",
      publicationDate: "1951-07-16"
    },
    {
      bookName: "Brave New World",
      authorName: "Aldous Huxley",
      genre: "Science Fiction",
      publicationDate: "1932-08-30"
    },
    {
      bookName: "The Hobbit",
      authorName: "J.R.R. Tolkien",
      genre: "Fantasy",
      publicationDate: "2013"
    },
    {
      bookName: "The Lord of the Rings",
      authorName: "J.R.R. Tolkien",
      genre: "Fantasy",
      publicationDate: "2012"
    },
    {
      bookName: "Jane Eyre",
      authorName: "Charlotte Brontë",
      genre: "Romance",
      publicationDate: "2011"
    },
    {
      bookName: "Wuthering Heights",
      authorName: "Emily Brontë",
      genre: "Tragedy",
      publicationDate: "2000"
    },
    {
      bookName: "Crime and Punishment",
      authorName: "Fyodor Dostoevsky",
      genre: "Psychological Fiction",
      publicationDate: "1999"
    },
    {
      bookName: "The Grapes of Wrath",
      authorName: "John Steinbeck",
      genre: "Historical Fiction"}
    ]
    // console.log(books);
   
//   let userBooks=books.filter((bk)=> bk.genre === 'Fiction')
   let  userBooks=books.filter((bk)=> new Date (bk.publicationDate) >= new Date ('1932-08-03') && bk.genre === 'Fiction' )
    console.log(userBooks);*/

    //MAP

//     const myNum=[1,2,3,4,5,6,7]
// const newNum=myNum.map((num) =>  num + 10 )
// console.log(newNum);


//Optional Chaining
// const myNum=[1,2,3,4,5]
// const newNum=myNum
// .map((num)=> num*10)
// .map((num)=> num + 1)
// .filter((num)=> num>20);
// console.log(newNum);

//Reduce
const num=[50,19,12,17,34]
const addNum=num.reduce((acc,currVal)=> (acc + currVal) , 0)
console.log(addNum);

// const cart = [
//     { item: "Laptop", price: 1000 },
//     { item: "Phone", price: 500 },
//     { item: "Tablet", price: 300 }
//   ];
//   const total=cart.reduce((acc , product) => acc + product.price, 0)
//   console.log(total);
  