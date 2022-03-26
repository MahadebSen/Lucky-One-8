
import './App.css';
import Header from './Components/Header/Header';
import One from './Components/Questions/One/One';
import Two from './Components/Questions/Two/Two';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <div>
        <One></One>
        <Two></Two>
      </div>
    </div>
  );
}

export default App;
