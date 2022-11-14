import './App.css';
import AuthorForm from './components/AuthorForm';
import Main from './views/Main';
import Edit from './views/Edit';
import {Route, Routes} from 'react-router-dom';
import NotFound from './views/NotFound'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/authors" element={<Main/>}/>
        <Route path="/authors/new" element={<AuthorForm/>}/>
        <Route path="/authors/:id/edit" element={<Edit/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
