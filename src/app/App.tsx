import Search from './components/Search'
import List from './components/List'
import Filter from './components/Filter'
import Header from './components/Header';
import Test from './Test'
import './App.css';

function App() {
  return (
    <>
      {/* <Test /> */}
      <Header />
      <main>
        <Search />
        <Filter />
        <List />
      </main>
    </>
  );
}

export default App;
