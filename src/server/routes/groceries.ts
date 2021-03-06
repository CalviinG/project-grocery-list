import { Request, Response } from 'express';
import { dbCreateGrocery, dbRemoveGrocery, dbUpdateGrocery, fetchAll, fetchOne } from '../db';
import { TGrocery, EDatabaseModels } from '../../core/types';

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

const updateGrocery = async (req: Request, res: Response) => {
  try {
    const grocery = await dbUpdateGrocery(req.body.name, req.params.id);

    res.status(200).json(grocery);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const groceries = { fetchGroceries, fetchGrocery, removeGrocery, createGrocery, updateGrocery };
