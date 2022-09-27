import { useState, createContext } from 'react';
import useFetching from './hooks/useFetching';
import PokeSearch from './components/PokeSearch';
import MyPokemons from './components/MyPokemons';

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
      <PokeSearch />
      <MyPokemons />
    </PokeContext.Provider>
  );
}

export default App;
