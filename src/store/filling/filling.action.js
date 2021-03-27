import { findAll } from '../../services/FillingService';

export const setLoading = (isLoading) => ({
  type: '@filling/setLoading',
  payload: isLoading,
});

export const setData = (data) => ({
  type: '@filling/setData',
  payload: data,
});

export const setError = (error) => ({
  type: '@filling/setError',
  payload: error,
});

export const clear = () => ({
  type: '@filling/clear',
});

export const fetchFillings = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const fillings = await findAll();

    return dispatch([setLoading(false), setData(fillings), setError(false)]);
  } catch (err) {
    return dispatch([setLoading(false), setError(true)]);
  }
};
