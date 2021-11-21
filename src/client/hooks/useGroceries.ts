import { useCallback } from 'react';
import axios from 'axios';
import { TGrocery } from '../../core/types';

export const useGroceries = () => {
  const fetchGroceries = useCallback(async () => {
    const response = await axios.get<TGrocery[]>('/groceries');
    const groceries = response.data;

    return groceries;
  }, []);

  const fetchGrocery = useCallback(async (id: string) => {
    const response = await axios.get<TGrocery>(`/groceries/${id}`);
    const grocery = response.data;

    return grocery;
  }, []);

  return { fetchGroceries, fetchGrocery };
};
