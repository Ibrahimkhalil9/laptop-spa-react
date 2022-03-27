
import './App.css';
import Cart from './Component/Cart/Cart';
import Header from './Component/Header/Header';

function App() {
  return (
    <div>

      <Header></Header>
      <div className='cart-style'>
        <Cart></Cart>
      </div>

    </div>
  );
}

export default App;
