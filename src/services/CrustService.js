/* eslint-disable import/prefer-default-export */
import { toast } from 'react-toastify';
import api from './api';

export async function findAll() {
  try {
    const response = await api.get('crusts');

    return response.data;
  } catch (e) {
    toast.error('Erro ao buscar bordas');
    throw e;
  }
}
