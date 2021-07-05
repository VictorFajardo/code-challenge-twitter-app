import Search from './components/Search'
import List from './components/List'
import Filter from './components/Filter'
import Header from './components/Header';
import { useState } from 'react';

const App = () => {
  const [height, setHeight] = useState<number>(0)
  
  return (
    <>
      <Header />
      <main style={{ height: height }}>
        <Search />
        <Filter />
        <List setHeight={setHeight}/>
      </main>
    </>
  );
}

export default App;
