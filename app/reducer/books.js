import _ from 'lodash';

export default function books(state = [], action) {
  switch (action.type) {
    case 'BOOK@FINDALL_COMPLETE':
      return _.unionBy(action.data, state, '_id');
    case 'BOOK@FINDONE_COMPLETE': // Continue on
      // return _.unionBy([action.data], state, '_id');
    case 'BOOK@CREATE_COMPLETE':
      // return _.unionBy([action.data], state, '_id');
    case 'BOOK@UPDATE_COMPLETE':
      return _.unionBy([action.data], state, '_id');
    default:
      return state;
  }
}
