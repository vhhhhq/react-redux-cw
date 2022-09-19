import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Menu/Header';
import {FormList} from './pages/Form/FormList';
import Home from './pages/Home/Home';
import Questions from './pages/Questions/Questions';

function App() {
  return (
    
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/formList" element={<FormList/>} />
          <Route path="/" element={<Questions/>} />
          <Route path="/questions" element={<Questions/>} />
        </Routes>
      </div>
  );
}

export default App;
