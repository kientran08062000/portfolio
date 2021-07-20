import NavBar from './view/NavBar';

import './App.css';
import ContentSection1 from './view/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar />
      </header>
      <ContentSection1 />
    </div>
  );
}

export default App;
