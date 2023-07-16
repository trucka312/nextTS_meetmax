// Khởi tạo trạng thái ban đầu của counter
const initialState = {
  count: 2,
};
// Reducer
const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'INCREMENT_VALUE':
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
