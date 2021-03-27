const INITIAL_STATE = {
  loading: false,
  data: null,
  error: false,
};

export default function daySuggestionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@daySuggestion/setLoading':
      return {
        ...state,
        loading: action.payload,
      };
    case '@daySuggestion/setData':
      return {
        ...state,
        data: action.payload,
      };
    case '@daySuggestion/setError':
      return {
        ...state,
        error: action.payload,
      };
    case '@daySuggestion/clear':
      return INITIAL_STATE;
    default:
      return state;
  }
}
