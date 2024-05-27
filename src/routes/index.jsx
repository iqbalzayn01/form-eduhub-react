import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import SignUp from '../pages/signup';
import SignIn from '../pages/signin';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </>
  )
);
