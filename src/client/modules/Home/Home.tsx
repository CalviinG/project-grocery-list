import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useLists } from '~/hooks';
import { TList } from '@/core';

export const Home = () => {
  const [lists, setLists] = useState<TList[]>([]);
  const { fetchLists } = useLists();

  const fetchData = async () => {
    const newLists = await fetchLists();

    setLists(newLists);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        {lists.map((list) => (
          <div key={list.listId}>{list.name}</div>
        ))}
      </Grid>
    </Grid>
  );
};
