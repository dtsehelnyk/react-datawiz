const initialStore = {
  modal: null,
}

export const reducerModal = (state = initialStore, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        currentModal: action.payload,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        currentModal: null,
      }

    default:
      return state;
  }
}
