export const productReducer = (state = [], action) => {
  switch (action.type) {
    case '[Product] - ADD-PRODUCT':
      console.log('Agregar');
      break;

    case '[Product] - EDIT-PRODUCT':
      console.log('Agregar');
      break;

    case '[Product] - DELETE-PRODUCT':
      console.log('Agregar');
      break;

    default:
      return state;
  }
};
