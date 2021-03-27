import { findAll } from '../../services/DoughService';

export const setLoading = (isLoading) => ({
  type: '@dough/setLoading',
  payload: isLoading,
});

export const setData = (data) => ({
  type: '@dough/setData',
  payload: data,
});

export const setError = (error) => ({
  type: '@dough/setError',
  payload: error,
});

export const clear = () => ({
  type: '@dough/clear',
});

export const fetchDough = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const dough = await findAll();

    return dispatch([setLoading(false), setData(dough), setError(false)]);
  } catch (err) {
    return dispatch([setLoading(false), setError(true)]);
  }
};
