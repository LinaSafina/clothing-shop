import { Routes, Route } from 'react-router-dom';
import Navigation from './pages/navigation/navigation.component';
import Contacts from './pages/contacts/contacts.component';
import SignIn from './pages/auth/auth.component';
import Shop from './pages/shop/shop.component';
import Home from './pages/home/home.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/auth' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
