/* eslint-disable import/prefer-default-export */
import { toast } from 'react-toastify';
import api from './api';

export async function findByDayOfTheWeek(dayOfTheWeek) {
  try {
    const response = await api.get(`day_suggestion/${dayOfTheWeek}`);

    return response.data;
  } catch (e) {
    toast.error('Erro ao buscar sugestão do dia');
    throw e;
  }
}

export async function selectPizzaOfTheDay(dayOfTheWeek) {
  try {
    const response = await api.post(`day_suggestion/${dayOfTheWeek}`);

    return response.data;
  } catch (e) {
    toast.error('Erro ao buscar sugestão do dia');
    throw e;
  }
}
