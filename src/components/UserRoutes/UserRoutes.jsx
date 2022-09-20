import Loader from '../Loader/Loader';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
const Home = lazy(() => import('../../pages/Home/Home'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));

const PageNotFound = lazy(() =>
  import('../../pages/PageNotFound/PageNotFound')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
