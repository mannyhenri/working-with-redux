const initialState = {
  notes: [
    {
      id: '27812b',
      title: 'An example note',
      details: 'This is an example note for redux architecture course'
    },
    {
      id: '287b922',
      title: 'Redux note',
      details: 'This is YET another example note for redux and flux architecture course'
    },
  ],
  name: 'Manny',
}


export default (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_NOTE':
        return {
          ...state,
          notes: [...state.notes, action.note],
        }
      
      case 'REMOVE_NOTE':
        return {
          ...state,
          notes: state.notes.filter(note => note !== action.note),
        }

      case 'GET_NOTES':
          return {
            ...state,
          }    

      default:
          return state;
  }
}