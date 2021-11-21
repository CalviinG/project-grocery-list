import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGroceries } from '~/hooks';
import { TGrocery } from '@/core';

export const Grocery = () => {
  const [grocery, setGrocery] = useState<TGrocery | null>(null);
  const [loading, setLoading] = useState(true);
  const { fetchGrocery } = useGroceries();
  const { groceryId } = useParams();

  useEffect(() => {
    const fetchData = async (id: string) => {
      const newGrocery = await fetchGrocery(id);

      setLoading(false);
      setGrocery(newGrocery);
    };

    if (groceryId) {
      fetchData(groceryId);
    }
  }, [fetchGrocery, groceryId]);

  if (loading) {
    return <div>Loading grocery..</div>;
  }

  if (!grocery) {
    return <div>Error loading grocery</div>;
  }

  return (
    <div>
      <h3>{grocery.name}</h3>
    </div>
  );
};
