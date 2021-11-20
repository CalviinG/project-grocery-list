import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TGrocery } from '../../../core/types';
import { AppRoutes } from '../../constants';
import { useAppRoute, useGroceries } from '../../hooks';

export const Groceries = () => {
  const [groceries, setGroceries] = useState<TGrocery[]>([]);
  const [loading, setLoading] = useState(true);
  const { appRoute } = useAppRoute();
  const { fetchGroceries } = useGroceries();

  useEffect(() => {
    const fetchData = async () => {
      const newGroceries = await fetchGroceries();

      setLoading(false);
      setGroceries(newGroceries);
    };

    fetchData();
  }, [fetchGroceries]);

  if (loading) {
    return <div>Loading groceries..</div>;
  }

  return (
    <ul>
      {groceries.map((grocery) => (
        <li key={grocery.groceryId}>
          <Link to={appRoute(AppRoutes.Grocery, grocery.groceryId)}>{grocery.name}</Link>
        </li>
      ))}
    </ul>
  );
};
