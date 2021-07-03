import Search from './components/Search'
import List from './components/List'
import Filter from './components/Filter'
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Filter />
      <List />
    </div>
  );
}

export default App;
