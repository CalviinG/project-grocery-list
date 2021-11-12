import { ColumnValue, Connection, Request } from "tedious";
import { config } from "./config";
import { EDatabaseModels } from "../core/types";

const idMap = {
  [EDatabaseModels.Grocery]: "groceryId",
  [EDatabaseModels.List]: "listId",
};

const mapRow = <T>(columns: ColumnValue[]): T => {
  const keys = columns.map((column) => column.metadata.colName) as (keyof T)[];

  return keys.reduce((acc, key, index) => {
    acc[key] = columns[index].value;
    return acc;
  }, {} as T);
};

const connect = (): Promise<Connection> => {
  return new Promise((resolve, reject) => {
    const connection = new Connection(config);

    connection.on("connect", (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(connection);
      }
    });

    connection.on("error", (error) => {
      reject(error);
    });

    connection.connect();
  });
};

const execute = async <T>(query: string): Promise<T[]> => {
  const connection = await connect();

  return new Promise((resolve, reject) => {
    const results: T[] = [];

    const request = new Request(query, (error) => {
      if (error) {
        reject(error);
      }
    });

    request.on("row", (rowColumnValues) => {
      results.push(mapRow(rowColumnValues));
    });

    request.on("requestCompleted", () => {
      resolve(results);
      connection.close();
    });

    connection.execSql(request);
  });
};

const fetchOne = async <T>(model: EDatabaseModels, id: string): Promise<T> => {
  const query = `SELECT * FROM ${model} WHERE ${idMap[model]} = '${id}'`;
  const result = await execute<T>(query);

  // if (model === EDatabaseModels.List) {
  //   const q1 = `SELECT * FROM `;
  // }

  return result[0];
};

const fetchAll = async <T>(model: EDatabaseModels): Promise<T[]> => {
  const query = `SELECT * FROM ${model}`;
  const result = await execute<T>(query);

  return result;
};

export const db = { fetchOne, fetchAll };
