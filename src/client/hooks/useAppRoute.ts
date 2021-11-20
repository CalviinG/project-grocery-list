import { AppRoutes } from '../constants';

export const useAppRoute = () => {
  const routeMap = {
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
