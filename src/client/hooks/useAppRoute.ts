import { AppRoutes } from '~/constants';

export const useAppRoute = () => {
  const routeMap = {
    [AppRoutes.Groceries]: null,
    [AppRoutes.Grocery]: ':groceryId',
    [AppRoutes.Lists]: null,
    [AppRoutes.List]: ':listId'
  };

  const appRoute = (route: AppRoutes, id?: string) => {
    const replaceKey = routeMap[route];

    if (replaceKey && id) {
      return route.replace(replaceKey, id);
    }

    return route;
  };

  return { appRoute };
};
