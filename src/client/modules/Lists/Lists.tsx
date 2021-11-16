import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TList } from "../../../core/types";
import { AppRoutes } from "../../constants";
import { useAppRoute, useLists } from "../../hooks";

export const Lists = () => {
  const [lists, setLists] = useState<TList[]>([]);
  const [loading, setLoading] = useState(true);
  const { appRoute } = useAppRoute();
  const { fetchLists } = useLists();

  useEffect(() => {
    const fetchData = async () => {
      const newLists = await fetchLists();

      setLoading(false);
      setLists(newLists);
    };

    fetchData();
  }, [fetchLists]);

  if (loading) {
    return <div>Loading lists..</div>;
  }

  return (
    <ul>
      {lists.map((list) => (
        <li key={list.listId}>
          <Link to={appRoute(AppRoutes.List, list.listId)}>{list.name}</Link>
        </li>
      ))}
    </ul>
  );
};
