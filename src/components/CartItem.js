import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../redux/cartSlice';
function CartItem({ id, img, title, price, amount }) {
  const dispath = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => dispath(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => dispath(increase(id))}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispath(removeItem(id));
            }
            dispath(decrease(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
