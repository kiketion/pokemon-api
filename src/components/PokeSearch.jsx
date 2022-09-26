import { useState } from 'react';

const PokeSearch = ({
  handleSearch,
  loading,
  error,
  handleSave,
  searchName,
  data,
}) => {
  const [pokeName, setPokeName] = useState('');

  const handleChange = (e) => {
    setPokeName(e.target.value);
    e.preventDefault();
  };

  if (loading) return <h1>LOADING...</h1>;
  if (error) return <h1>ERROR! Please, reload the page...</h1>;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: '95px',
        marginBottom: '45px',
      }}
    >
      <div style={{ marginTop: '45px' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'arial' }}>Pokédex</h1>
        <form
          onSubmit={searchName}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '45px',
            alignItems: 'center',
          }}
        >
          <input
            type='text'
            placeholder='Pokemon Name...'
            onChange={handleChange}
            value={pokeName}
            style={{
              fontSize: '25px',
              marginTop: '25px',
              borderRadius: '10px',
            }}
          />
          <button
            style={{
              backgroundColor: 'yellow',
              fontSize: '25px',
              border: 'none',
              borderRadius: '20%',
            }}
            onClick={() => {
              handleSearch(pokeName);
              setPokeName('');
            }}
          >
            Search
          </button>
        </form>
      </div>
      {data?.name && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '55px',
          }}
        >
          <img style={{ marginBottom: '-30px' }} src={data?.img} />
          <h3
            style={{
              fontFamily: 'arial',
              textAlign: 'center',
              marginBottom: '-20px',
            }}
          >
            {data?.name}
          </h3>
          <h4 style={{ marginBottom: '-12px' }}>Type: {data?.type}</h4>
          <p style={{ marginBottom: '-15px', fontSize: '12px' }}>
            Hp: {data?.hp}
          </p>
          <p style={{ marginBottom: '-15px', fontSize: '12px' }}>
            Attack: {data?.attack}
          </p>
          <p style={{ marginBottom: '-5px', fontSize: '12px' }}>
            Defense: {data?.defense}
          </p>

          {data?.name && (
            <button
              style={{
                marginTop: '5px',
                backgroundColor: 'yellow',
                fontSize: '25px',
                border: 'none',
                borderRadius: '20%',
              }}
              onClick={handleSave}
            >
              Catch It!
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PokeSearch;
