import { ColumnValue, Connection, Request } from 'tedious';
import { config } from './config';
import { EDatabaseModels, TGrocery } from '../core/types';

const idMap = {
  [EDatabaseModels.Grocery]: 'groceryId',
  [EDatabaseModels.List]: 'listId'
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

    connection.on('connect', (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(connection);
      }
    });

    connection.on('error', (error) => {
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

    request.on('row', (rowColumnValues) => {
      results.push(mapRow(rowColumnValues));
    });

    request.on('requestCompleted', () => {
      resolve(results);
      connection.close();
    });

    connection.execSql(request);
  });
};

export const fetchOne = async <T>(model: EDatabaseModels, id: string): Promise<T> => {
  const query = `SELECT * FROM ${model} WHERE ${idMap[model]} = '${id}'`;
  const result = await execute<T>(query);

  return result[0];
};

export const fetchGroceryList = async (id: string): Promise<TGrocery[]> => {
  const query = `SELECT GroceryList.groceryId, Grocery.name FROM GroceryList JOIN Grocery ON GroceryList.groceryId = Grocery.groceryId WHERE GroceryList.listId = ${id}`;
  const result = await execute<TGrocery>(query);

  return result;
};

export const fetchAll = async <T>(model: EDatabaseModels): Promise<T[]> => {
  const query = `SELECT * FROM ${model}`;
  const result = await execute<T>(query);

  return result;
};

export const dbRemoveGrocery = (id: string) => {
  const query = `DELETE grocery WHERE groceryId = ${id}`;
  execute(query);
};

export const dbCreateGrocery = async (name: string) => {
  const query = `INSERT INTO grocery(name) VALUES ('${name}'); SELECT @@IDENTITY AS id`;
  const result = await execute<{ id: number }>(query);
  const grocery = await fetchOne<TGrocery>(EDatabaseModels.Grocery, result[0].id.toString());

  return grocery;
};
