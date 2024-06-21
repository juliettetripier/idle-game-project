import './App.css';
import { Counter } from '../features/counter/counter'
import { Clickables } from '../features/clickables/clickables'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hiiiiii</h1>
        <Counter />
        <Clickables />
      </header>
    </div>
  );
}

export default App;
