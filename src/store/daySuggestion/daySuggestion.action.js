import { toast } from 'react-toastify';

import {
  findByDayOfTheWeek,
  selectPizzaOfTheDay,
} from '../../services/DaySuggestionService';
import { setPizza } from '../pizza';
import { setStep } from '../stepper';

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

export const selectDaySuggestion = (dayOfTheWeek) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await selectPizzaOfTheDay(dayOfTheWeek);

    toast.success(response.message);

    return dispatch([
      setLoading(false),
      setPizza(response.pizza),
      setStep(6),
      setError(false),
    ]);
  } catch (err) {
    return dispatch([setLoading(false), setError(true)]);
  }
};
