import Menu from './components/Menu';
import './App.css';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Home />
        <About />
      </header>
    </div>
  );
}

export default App;
