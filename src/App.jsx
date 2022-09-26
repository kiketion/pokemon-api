import { useState } from 'react';
import useFetching from './hooks/useFetching';
import PokeSearch from './components/PokeSearch';
import MyPokemons from './components/MyPokemons';

const LoadingComponent = () => (
  <div>
    Loading...
  </div>
)


function App() {
  const [search, setSearch] = useState();
  const [pokeName, setPokeName] = useState('');
  const [pokeList, setPokeList] = useState([]);
  const { data, loading, error } = useFetching(search);

  const searchName = (e) => {
    e.preventDefault();
    setPokeName('');
    setSearch('');
  };

  const handleChange = (e) => {
    setPokeName(e.target.value);
    e.preventDefault();
  };

  const handleClick = () => {
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
      {/* <h1 style={{ textAlign: 'center', fontFamily: 'arial' }}>Pokemon API</h1>
      <form
        onSubmit={searchName}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
          alignItems: 'center',
        }}
      >
        <input type='text' onChange={handleChange} value={pokeName} />
        <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
          <button onClick={handleClick}>Search</button>
        </div>
      </form>
      <h2>{data?.name}</h2>
      <img src={data?.img} />
    {data?.name && <button onClick={handleSave}>Catch It!</button>} */}
      <div>
        <div>
          <PokeSearch
            handleSearch={handleClick}
            handleChange={handleChange}
            handleSave={handleSave}
            searchName={searchName}
            pokeName={pokeName}
            data={data}
          />
              {loading ? <LoadingComponent /> : <MyPokemons pokeList={pokeList} />}
          {/* <h2>Pokédex</h2>
          <ul style={{ listStyleType: 'none' }}>
            {pokeList?.map(({ name, img }) => {
              return (
                <li key={name}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '10px',
                    }}
                  >
                    <img src={img} />
                    <h2>{name}</h2>
                  </div>
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default App;
