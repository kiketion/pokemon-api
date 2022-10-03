import { useState, createContext } from 'react';
import useFetching from './hooks/useFetching';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import PokeList from './pages/PokeList';

export const PokeContext = createContext();

function App() {
  const [search, setSearch] = useState();
  const [pokeList, setPokeList] = useState([]);
  const { data, loading, error } = useFetching(search);

  const searchName = (e) => {
    e.preventDefault();
    setSearch('');
  };

  const handleSearch = (pokeName) => {
    setSearch(pokeName);
  };

  const handleSave = () => {
    console.log(error);
    if (error !== undefined && error !== null) {
      return;
    }
    if (!pokeList.includes(data)) {
      setPokeList([...pokeList, data]);
    }
    console.log([...pokeList, data]);
  };

  return (
    <>
      <PokeContext.Provider
        value={{
          handleSearch,
          handleSave,
          searchName,
          data,
          loading,
          error,
          pokeList,
        }}
      >
        <NavBar />

        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokelist' element={<PokeList />} />
          </Routes>
        </div>
      </PokeContext.Provider>
    </>
  );
}

export default App;
