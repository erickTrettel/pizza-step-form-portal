import { findAll } from '../../services/SizeService';

export const setLoading = (isLoading) => ({
  type: '@size/setLoading',
  payload: isLoading,
});

export const setData = (data) => ({
  type: '@size/setData',
  payload: data,
});

export const setError = (error) => ({
  type: '@size/setError',
  payload: error,
});

export const clear = () => ({
  type: '@size/clear',
});

export const fetchSizes = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const sizes = await findAll();

    return dispatch([setLoading(false), setData(sizes), setError(false)]);
  } catch (err) {
    return dispatch([setLoading(false), setError(true)]);
  }
};
