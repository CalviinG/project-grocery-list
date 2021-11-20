export type TList = {
  listId: string;
  name: string;
  groceries: TGrocery[];
};

export type TGrocery = {
  groceryId: string;
  name: string;
};

export enum EDatabaseModels {
  List = 'List',
  Grocery = 'Grocery'
}
