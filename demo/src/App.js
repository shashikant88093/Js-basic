import './App.css';
import Shashikant from './SHASHIKANT.pdf';

function App() {
  return (
    <div className="App">
      <iframe  title="Hello" src={Shashikant} width="100%" height="100%"></iframe>
    </div>
  );
}

export default App;
