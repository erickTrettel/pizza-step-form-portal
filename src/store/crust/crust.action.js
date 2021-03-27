import { findAll } from '../../services/CrustService';

export const setLoading = (isLoading) => ({
  type: '@crust/setLoading',
  payload: isLoading,
});

export const setData = (data) => ({
  type: '@crust/setData',
  payload: data,
});

export const setError = (error) => ({
  type: '@crust/setError',
  payload: error,
});

export const clear = () => ({
  type: '@crust/clear',
});

export const fetchCrusts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const crusts = await findAll();

    return dispatch([setLoading(false), setData(crusts), setError(false)]);
  } catch (err) {
    return dispatch([setLoading(false), setError(true)]);
  }
};
