import { combineReducers } from 'redux';
import books from './reducer/books';

// export default combineReducers({
//   books
// });

export default function reducer(old, action) {
  return {
    books: books(old.books, action)
  };
}
