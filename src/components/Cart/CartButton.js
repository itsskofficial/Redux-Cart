import classes from './CartButton.module.css';

const CartButton = (props) => {
  const toggleCartHandler = () => {
    dispatc
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
