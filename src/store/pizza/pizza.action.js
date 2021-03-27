export const setPizza = (pizza) => ({
  type: '@pizza/setPizza',
  payload: pizza,
});

export const setDough = (dough) => ({
  type: '@pizza/setDough',
  payload: dough,
});

export const setCrust = (crust) => ({
  type: '@pizza/setCrust',
  payload: crust,
});

export const setFilling = (filling) => ({
  type: '@pizza/setFilling',
  payload: filling,
});

export const setSize = (size) => ({
  type: '@pizza/setSize',
  payload: size,
});

export const clear = () => ({
  type: '@pizza/clear',
});
