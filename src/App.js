import Book from './components/Book';
import ListBooks from './components/ListBooks';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListBooks />}/>
        <Route path='/book/:id' element={<Book />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
