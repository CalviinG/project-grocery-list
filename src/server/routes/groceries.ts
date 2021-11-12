import { Request, Response } from "express";
import { db } from "../db";
import { TGrocery, EDatabaseModels } from "../../core/types";

const fetchGroceries = async (req: Request, res: Response) => {
  try {
    const lists = await db.fetchAll<TGrocery>(EDatabaseModels.Grocery);

    res.json(lists);
  } catch (error) {
    res.status(500).json(error);
  }
};

const fetchGrocery = async (req: Request, res: Response) => {
  try {
    const list = await db.fetchOne<TGrocery>(
      EDatabaseModels.Grocery,
      req.params.id
    );

    res.json(list);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const groceries = { fetchGroceries, fetchGrocery };
