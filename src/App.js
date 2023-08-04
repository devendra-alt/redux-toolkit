import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import { Navbar } from './components/Navbar';
import { useEffect } from 'react';
import { calculateTotals, getCartItems } from './redux/cartSlice';
import Modal from './components/Modal';

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const { items, isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [items]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen ? <Modal /> : ''}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
