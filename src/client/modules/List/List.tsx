import axios from "axios";
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

  const removeGrocery = (groceryId: string) => {
    axios.delete(`/groceries/${groceryId}`);
  };

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
          <li key={grocery.groceryId}>
            <span>{grocery.name}</span>
            <button onClick={() => removeGrocery(grocery.groceryId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
