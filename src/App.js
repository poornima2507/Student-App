import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewallStudent from './components/ViewallStudent';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <AddStudent/>
      <SearchStudent/>
      <DeleteStudent/>
      <ViewallStudent/>
      <NavBar/>
    </div>
  );
}

export default App;
