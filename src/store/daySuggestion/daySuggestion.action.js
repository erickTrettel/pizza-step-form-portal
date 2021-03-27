import { findByDayOfTheWeek } from '../../services/DaySuggestionService';

export const setLoading = (isLoading) => ({
  type: '@daySuggestion/setLoading',
  payload: isLoading,
});

export const setData = (data) => ({
  type: '@daySuggestion/setData',
  payload: data,
});

export const setError = (error) => ({
  type: '@daySuggestion/setError',
  payload: error,
});

export const clear = () => ({
  type: '@daySuggestion/clear',
});

export const fetchDaySuggestion = (dayOfTheWeek) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const daySuggestion = await findByDayOfTheWeek(dayOfTheWeek);

    return dispatch([
      setLoading(false),
      setData(daySuggestion),
      setError(false),
    ]);
  } catch (err) {
    return dispatch([setLoading(false), setError(true)]);
  }
};
