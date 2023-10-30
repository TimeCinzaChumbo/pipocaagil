import "./App.css";

import Menu from "./components/menu/Menu";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import PreviewEpisodes from "./components/pages/previewEpisodes/previewEpisodes/PreviewEpisodes";
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Home />
        <About />
        <PreviewEpisodes />

      </header>
    </div>
  );
}

export default App;
