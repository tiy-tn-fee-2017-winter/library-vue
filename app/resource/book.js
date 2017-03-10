import createResource from 'redux-thunk-rest';

export default createResource('book', {
  url: 'https://tiny-tn.herokuapp.com/collections/ryan-library'
});
