import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

  function App() {
    const showCart = useSelector(state => state.ui.showCart)
    const cart = useSelector(state => state.cart)
    
    useEffect((fe))
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
