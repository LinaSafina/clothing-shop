import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navigation from './pages/navigation/navigation.component';
import Contacts from './pages/contacts/contacts.component';
import SignIn from './pages/auth/auth.component';
import Shop from './pages/shop/shop.component';
import Home from './pages/home/home.component';
import Checkout from './pages/checkout/checkout.component';

import { checkUserSession } from './store/user/user.slice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='auth' element={<SignIn />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
