import { Request, Response } from "express";
import { db } from "../db";
import { TList, EDatabaseModels } from "../../core/types";

const fetchLists = async (req: Request, res: Response) => {
  try {
    const lists = await db.fetchAll<TList>(EDatabaseModels.List);

    res.json(lists);
  } catch (error) {
    res.status(500).json(error);
  }
};

const fetchList = async (req: Request, res: Response) => {
  try {
    const list = await db.fetchOne<TList>(EDatabaseModels.List, req.params.id);

    res.json(list);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const lists = { fetchLists, fetchList };
