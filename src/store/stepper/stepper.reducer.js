const INITIAL_STATE = {
  step: 0,
};

export default function stepperReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@stepper/setStep':
      return {
        ...state,
        step: action.payload,
      };
    case '@stepper/next':
      return {
        ...state,
        step: state.step + 1,
      };
    case '@stepper/previous':
      return {
        ...state,
        step: state.step - 1,
      };
    case '@stepper/clear':
      return INITIAL_STATE;
    default:
      return state;
  }
}
