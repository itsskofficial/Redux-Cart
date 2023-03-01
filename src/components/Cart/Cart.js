import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const DUMMY_ITEMS = [
  {
  id: 'p1',
  quantity:1,
  title:'Harry Potter',
  price: 3
  },
  {
  id: 'p2',
  quantity:1,
  title:'Percy Jacksonr',
  price: 5
  },
]

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
