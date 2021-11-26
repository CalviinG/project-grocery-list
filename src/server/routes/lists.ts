import { Request, Response } from 'express';
import { TList, EDatabaseModels } from '../../core';
import { fetchAll, fetchGroceryList, fetchOne } from '../db';

const fetchLists = async (req: Request, res: Response) => {
  try {
    const lists = await fetchAll<TList>(EDatabaseModels.List);

    res.json(lists);
  } catch (error) {
    res.status(500).json(error);
  }
};

const fetchList = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const list = await fetchOne<TList>(EDatabaseModels.List, id);
    const groceries = await fetchGroceryList(id);
    list.groceries = groceries;

    res.json(list);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const lists = { fetchLists, fetchList };
