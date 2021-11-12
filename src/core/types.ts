export type TList = {
  listId: string;
  name: string;
};

export type TGrocery = {
  groceryId: string;
  name: string;
};

export enum EDatabaseModels {
  List = "List",
  Grocery = "Grocery",
}
