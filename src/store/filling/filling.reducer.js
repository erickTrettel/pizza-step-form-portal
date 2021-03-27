const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false,
};

export default function fillingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@filling/setLoading':
      return {
        ...state,
        loading: action.payload,
      };
    case '@filling/setData':
      return {
        ...state,
        data: action.payload,
      };
    case '@filling/setError':
      return {
        ...state,
        error: action.payload,
      };
    case '@filling/clear':
      return INITIAL_STATE;
    default:
      return state;
  }
}
