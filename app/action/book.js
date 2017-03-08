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
  return {
    type: 'BOOK@FINDALL_COMPLETE',
    data
  };
}

/**
 * Creates a thunk to find all books from the server
 * @return {function}
 */
export function findAll() {
  return dispatch => fetch(apiUrl).then(parseJson)
    .then((response) => {
      dispatch(findAllComplete(response));
    });
}

/**
 * Creates an action object for BOOK@FINDONE_COMPLETE
 * @param  {Object}  [data={}]
 * @return {Object}
 */
export function findOneComplete(data = {}) {
  return {
    type: 'BOOK@FINDONE_COMPLETE',
    data
  };
}

/**
 * Creates a thunk to a book based on its id
 * @return {function}
 */
export function findById(id) {
  return dispatch => fetch(`${apiUrl}/${id}`).then(parseJson)
    .then((response) => {
      dispatch(findOneComplete(response));
    });
}

/**
 * Creates an action object for BOOK@CREATE_COMPLETE
 * @param  {Object}  [data={}]
 * @return {Object}
 */
export function createComplete(data = {}) {
  return {
    type: 'BOOK@CREATE_COMPLETE',
    data
  };
}

/**
 * Creates a thunk to create and save a new book on the server
 * @return {function}
 */
export function create(formData) {
  return dispatch => fetch(apiUrl, {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify(formData),
  }).then(parseJson)
    .then((book) => {
      dispatch(createComplete(book));
    });
}

/**
 * Creates an action object for BOOK@UPDATE_COMPLETE
 * @param  {Object}  [data={}]
 * @return {Object}
 */
export function updateComplete(data = {}) {
  return {
    type: 'BOOK@UPDATE_COMPLETE',
    data
  };
}

/**
 * Creates a thunk to update a book on the server
 * @return {function}
 */
export function update(id, formData) {
  return dispatch => fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: jsonHeaders,
    body: JSON.stringify(formData),
  }).then(parseJson)
    .then((book) => {
      dispatch(updateComplete(book));
    });
}
