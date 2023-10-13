import './App.css';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import TextUtils from './Components/TextUtils';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      
      {/* <Weather/> */}
      
      <Routes>
      <Route path='/' element={<Weather/>}></Route>
      <Route path='/text' element={<TextUtils props={{heading:'Text Converter',h2heading:'Preview Your Text'}}/>}/>
      </Routes>
    </div>
  );
}

export default App;
