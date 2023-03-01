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
  {
  id: 'p3',
  quantity:1,
  title:'DaVinci Code',
  price: 7
  },
]

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item=
        />
      </ul>
    </Card>
  );
};

export default Cart;
