import { BrowserRouter, Router } from 'react-router-dom';
import Routers from './Routers/Routers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
