import './App.css';
import Email from './components/Email/Email';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello
      </h1>
      <Email />
      <Product />
    </div>
  );
}

export default App;
