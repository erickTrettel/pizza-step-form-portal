const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false,
};

export default function sizeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@size/setLoading':
      return {
        ...state,
        loading: action.payload,
      };
    case '@size/setData':
      return {
        ...state,
        data: action.payload,
      };
    case '@size/setError':
      return {
        ...state,
        error: action.payload,
      };
    case '@size/clear':
      return INITIAL_STATE;
    default:
      return state;
  }
}
