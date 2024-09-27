import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import FoodList from './Home/FoodList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <FoodList></FoodList>
    </div>
  );
}

export default App;
