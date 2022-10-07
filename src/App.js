import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';

import Article from './Pages/Article';
import Home from './Pages/Home';

import Header from './Components/Header';

const App = () => {
  return (
        <BrowserRouter>
            <Header/>
            <Routes>

                  <Route path='/' element={<Home/>}/>
                  <Route path='/:id' element={<Article/>}/>

            </Routes>
        </BrowserRouter>
  );
}

export default App;
