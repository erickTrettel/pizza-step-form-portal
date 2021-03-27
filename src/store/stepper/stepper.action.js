export const setStep = (step) => ({
  type: '@stepper/setStep',
  payload: step,
});

export const next = () => ({
  type: '@stepper/next',
});

export const previous = () => ({
  type: '@stepper/previous',
});

export const clear = () => ({
  type: '@stepper/clear',
});
