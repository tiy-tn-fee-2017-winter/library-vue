export default function books(state = [], action) {
  switch (action.type) {
    case 'BOOK@FINDALL_COMPLETE':
    case 'BOOK@FINDONE_COMPLETE':
    case 'BOOK@CREATE_COMPLETE':
    case 'BOOK@UPDATE_COMPLETE':
    default:
      return state;
  }
}
