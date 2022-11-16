import { useRoutes } from 'react-router-dom';
import MovieList from '@/pages/MovieList';


const routeList = [
  {
    path: '/movies-list',
    element: <MovieList />
  }
];

const RenderRouter = () => useRoutes(routeList);

export const localRouters = routeList;
export default RenderRouter;
