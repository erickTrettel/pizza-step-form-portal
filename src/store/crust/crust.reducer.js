const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false,
};

export default function crustReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@crust/setLoading':
      return {
        ...state,
        loading: action.payload,
      };
    case '@crust/setData':
      return {
        ...state,
        data: action.payload,
      };
    case '@crust/setError':
      return {
        ...state,
        error: action.payload,
      };
    case '@crust/clear':
      return INITIAL_STATE;
    default:
      return state;
  }
}
