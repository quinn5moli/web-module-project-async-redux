import logo from './logo.svg';
import './App.css';
import Fact from './components/Fact';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Title />
       <Fact />
      </header>
    </div>
  );
}

export default App;
