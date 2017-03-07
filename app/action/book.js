const apiUrl = 'https://tiny-tn.herokuapp.com/collections/ryan-library';
const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

function parseJson(r) {
  return r.json();
}

/**
 * Creates an action object for BOOK@FINDALL_COMPLETE
 * @param  {Array}  [data=[]]
 * @return {Object}
 */
export function findAllComplete(data = []) {

}

/**
 * Creates a thunk to find all books from the server
 * @return {function}
 */
export function findAll() {

}

/**
 * Creates an action object for BOOK@FINDONE_COMPLETE
 * @param  {Object}  [data={}]
 * @return {Object}
 */
export function findOneComplete(data = {}) {

}

/**
 * Creates a thunk to a book based on its id
 * @return {function}
 */
export function findById(id) {

}

/**
 * Creates an action object for BOOK@CREATE_COMPLETE
 * @param  {Object}  [data={}]
 * @return {Object}
 */
export function createComplete(data = {}) {

}

/**
 * Creates a thunk to create and save a new book on the server
 * @return {function}
 */
export function create(formData) {

}

/**
 * Creates an action object for BOOK@UPDATE_COMPLETE
 * @param  {Object}  [data={}]
 * @return {Object}
 */
export function updateComplete(data = {}) {

}

/**
 * Creates a thunk to update a book on the server
 * @return {function}
 */
export function update(id, formData) {

}
