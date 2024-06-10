import './App.css';
import { Counter } from '../features/counter/counter'
import { Clickable } from '../features/clickables/clickable'

// use react to generate images in random locations at
// random time intervals
// add onclick functions to these images that send messages
// to the server to increase the count
// images should disappear/get deleted after being clicked
// step one: generate an image at a random location

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hiiiiii</h1>
        <Counter />
        <Clickable />
      </header>
    </div>
  );
}

export default App;
