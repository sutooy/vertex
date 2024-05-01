import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Main from './view/main';
import Detail from './view/detail';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
