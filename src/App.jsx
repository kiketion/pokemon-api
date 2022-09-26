import { useState } from 'react';
import useFetching from './hooks/useFetching';
import PokeSearch from './components/PokeSearch';
import MyPokemons from './components/MyPokemons';

function App() {
  const [search, setSearch] = useState();

  const [pokeList, setPokeList] = useState([]);
  const { data, loading, error } = useFetching(search);

  const searchName = (e) => {
    e.preventDefault();
    setSearch('');
  };

  const handleClick = (pokeName) => {
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
    <div>
      <div>
        <div>
          <PokeSearch
            handleSearch={handleClick}
            handleSave={handleSave}
            searchName={searchName}
            data={data}
            loading={loading}
            error={error}
          />
          <MyPokemons pokeList={pokeList} />
        </div>
      </div>
    </div>
  );
}

export default App;
