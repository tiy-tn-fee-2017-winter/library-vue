export default function books(state = [], action) {
  switch (action.type) {
    case 'BOOK@FINDALL_COMPLETE':
      return _.unionBy(action.data, state, '_id');
    case 'BOOK@FINDONE_COMPLETE':
      return _.unionBy([action.data], state, '_id');
    case 'BOOK@CREATE_COMPLETE':
    case 'BOOK@UPDATE_COMPLETE':
    default:
      return state;
  }
}
