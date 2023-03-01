import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
  id: 'p1',
  title:'Harry Potter',
  price: 3,
  description:'Amazing'
  },
  {
  id: 'p2',
  title:'Percy Jacksonr',
  price: 5,
  description:'Wonderful'
  },
  {
  id: 'p3',
  title:'DaVinci Code',
  price: 7
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
