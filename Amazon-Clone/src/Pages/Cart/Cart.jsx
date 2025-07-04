import React, { useContext } from 'react';
import Layout from '../../Components/Layout/Layout';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import clsses from './Cart.module.css';
import { Type } from '../../Utility/action.type';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce(
    (amount, item) => amount + item.price * item.amount,
    0
  );

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={clsses.container}>
        <div className={clsses.cart__container}>
          <h2>Hello {user?.name || ''}</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket?.map((item, id) => (
              <section key={id} className={clsses.cart_Product}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderAdd={false}
                />
                <div className={clsses.button_Container}>
                  <button className={clsses.amount_btn} onClick={() => increment(item)}>{< IoIosArrowUp size={25} />}</button>
                  <span>{item.amount}</span>
                  <button className={clsses.amount_btn} onClick={() => decrement(item.id)}> {<IoIosArrowDown size={25} />}</button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={clsses.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
