import { Request, Response } from "express";
import { fetchAll, fetchOne } from "../db";
import { TGrocery, EDatabaseModels } from "../../core/types";

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
    const grocery = await fetchOne<TGrocery>(
      EDatabaseModels.Grocery,
      req.params.id
    );

    res.json(grocery);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const groceries = { fetchGroceries, fetchGrocery };
