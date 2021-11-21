import { AppRoutes } from '../../constants';

export interface ICustomLinkProps {
  route: AppRoutes;
  render: (active: boolean) => JSX.Element;
}
