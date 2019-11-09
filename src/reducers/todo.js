export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        list: [...state.list.concat(state.newItem)],
        newItem: '',
      };
    case 'DELETE':
      return {
        ...state,
       list: [...state.list.filter(item => item !== action.item)]
      }  
    case 'TYPE_VALUE':
      return { ...state, newItem: action.value};
    default:
      throw new Error('Unexpected action');
  }
};