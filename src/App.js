import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';

  function App() {
    const showCart = useSelector(state => state.ui.showCart)
    const cart = useSelector(state => state.cart)
    const dispatch=useDispatch()
    
    useEffect(() => {
      const sendCartData = async () => {
        dispatch(
          uiActions.showNotification(
          
        )
        fetch('https://books-d57cf-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',
          body: JSON.stringify(cart)
        })
      }
    }, [cart])
    
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
