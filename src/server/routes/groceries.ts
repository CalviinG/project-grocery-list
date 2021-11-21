import { Request, Response } from 'express';
import { TGrocery, EDatabaseModels } from '../../core';
import { dbCreateGrocery, dbRemoveGrocery, fetchAll, fetchOne } from '../db';

const fetchGroceries = async (req: Request, res: Response) => {
  try {
    const groceries = await fetchAll<TGrocery>(EDatabaseModels.Grocery);

    res.json(groceries);
  } catch (error) {
    res.status(500).json(error);
  }
};

const fetchGrocery = async (req: Request, res: Response) => {
  try {
    const grocery = await fetchOne<TGrocery>(EDatabaseModels.Grocery, req.params.id);

    res.json(grocery);
  } catch (error) {
    res.status(500).json(error);
  }
};

const removeGrocery = (req: Request, res: Response) => {
  try {
    dbRemoveGrocery(req.params.id);

    res.status(200);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createGrocery = async (req: Request, res: Response) => {
  try {
    const grocery = await dbCreateGrocery(req.params.name);

    res.status(200).json(grocery);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const groceries = { fetchGroceries, fetchGrocery, removeGrocery, createGrocery };
