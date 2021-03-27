const INITIAL_STATE = {
  dough: null,
  crust: null,
  filling: null,
  size: null,
};

export default function pizzaReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@pizza/setPizza':
      return {
        ...state,
        ...action.payload,
      };
    case '@pizza/setDough':
      return {
        ...state,
        dough: action.payload,
      };
    case '@pizza/setCrust':
      return {
        ...state,
        crust: action.payload,
      };
    case '@pizza/setFilling':
      return {
        ...state,
        filling: action.payload,
      };
    case '@pizza/setSize':
      return {
        ...state,
        size: action.payload,
      };
    case '@pizza/clear':
      return INITIAL_STATE;
    default:
      return state;
  }
}
