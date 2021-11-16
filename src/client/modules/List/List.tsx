import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TList } from "../../../core/types";
import { useLists } from "../../hooks";

export const List = () => {
  const [list, setList] = useState<TList | null>(null);
  const [loading, setLoading] = useState(true);
  const { fetchList } = useLists();
  const { listId } = useParams();

  useEffect(() => {
    const fetchData = async (id: string) => {
      const newList = await fetchList(id);

      setLoading(false);
      setList(newList);
    };

    if (listId) {
      fetchData(listId);
    }
  }, [fetchList, listId]);

  if (loading) {
    return <div>Loading list..</div>;
  }

  if (!list) {
    return <div>Error loading list</div>;
  }

  return (
    <div>
      <h3>{list.name}</h3>
      <ul>
        {list.groceries.map((grocery) => (
          <li key={grocery.groceryId}>{grocery.name}</li>
        ))}
      </ul>
    </div>
  );
};
