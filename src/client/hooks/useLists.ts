import { useCallback } from "react";
import axios from "axios";
import { TList } from "../../core/types";

export const useLists = () => {
  const fetchLists = useCallback(async () => {
    const response = await axios.get<TList[]>("/lists");
    const lists = response.data;

    return lists;
  }, []);

  const fetchList = useCallback(async (id: string) => {
    const response = await axios.get<TList>(`/lists/${id}`);
    const list = response.data;

    return list;
  }, []);

  return { fetchLists, fetchList };
};
