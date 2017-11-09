export function selectBook(book){
  console.log(book);
  //selectBook is an actionCreator, it needs to return an actionCreator
  //an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book 
  };
};
