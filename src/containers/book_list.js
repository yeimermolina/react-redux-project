import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList(){
      return this.props.books.map((book) => {
        return (
          <li
            key={book.title}
            className="list-group-item"
            onClick={() => this.props.selectBook(book)}
          > 
            {book.title}
          </li>
          
        );
      })
  }
  
  render(){
    return (
      <ul className='list-group col-sm-4'>
      { this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books
  };
}

//Anything return from this functions will endup as props on the booklist container
function mapDispatchToProps(dispatch){
  //WhenEverselectbook is called, the results should be passed
  //to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote booklist from a component to a container. It needs to know about 
//new dispath method, selectBook, makeit available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

