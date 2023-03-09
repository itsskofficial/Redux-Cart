import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { Fragment } from 'react';
import { fetchCartData, sendCartData } from './store/cart-slice';

let isInitial = true

  function App() {
    const showCart = useSelector(state => state.ui.showCart)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const notification = useSelector(state=>state.ui.notification)

    useEffect(() => {
      dispatch(fetchCartData())
    }, [dispatch])
    
    useEffect(() => {
      if (isInitial) {
        isInitial = false;
        return;
      }
      if (cart.changed) {
        dispatch(sendCartData(cart));
      }
      
    }, [cart, dispatch]);
    
    // useEffect(() => {
    //   const sendCartData = async () => {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: 'pending',
    //         title: 'Sending...',
    //         message: 'Sending cart data!',
    //       })
    //     );
    //     const response = await fetch(
    //       'https://react-http-6b4a6.firebaseio.com/cart.json',
    //       {
    //         method: 'PUT',
    //         body: JSON.stringify(cart),
    //       }
    //     );
  
    //     if (!response.ok) {
    //       throw new Error('Sending cart data failed.');
    //     }
  
    //     dispatch(
    //       uiActions.showNotification({
    //         status: 'success',
    //         title: 'Success!',
    //         message: 'Sent cart data successfully!',
    //       })
    //     );
    //   };
  
    //   if (isInitial) {
    //     isInitial = false;
    //     return;
    //   }
  
    //   sendCartData().catch((error) => {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: 'error',
    //         title: 'Error!',
    //         message: 'Sending cart data failed!',
    //       })
    //     );
    //   });
    // }, [cart, dispatch]);
    
  return (
    <Fragment>
      {notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}></Notification>} 
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
    
  );
}

export default App;
