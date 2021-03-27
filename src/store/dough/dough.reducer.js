const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false,
};

export default function doughReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@dough/setLoading':
      return {
        ...state,
        loading: action.payload,
      };
    case '@dough/setData':
      return {
        ...state,
        data: action.payload,
      };
    case '@dough/setError':
      return {
        ...state,
        error: action.payload,
      };
    case '@dough/clear':
      return INITIAL_STATE;
    default:
      return state;
  }
}
