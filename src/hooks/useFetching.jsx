import { useState, useEffect } from 'react';

const useFetching = (search) => {
  const [data, setData] = useState({
    name: '',
    img: '',
    hp: '',
    attack: '',
    defense: '',
    type: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (search) {
      setError();

      fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then((res) => res.json())
        .then((info) => {
          setData({
            name: search,
            img: info.sprites.front_default,
            hp: info.stats[0].base_stat,
            attack: info.stats[1].base_stat,
            defense: info.stats[2].base_stat,
            type: info.types[0].type.name,
          });
          setLoading(true);

          console.log(info);
        })

        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [search]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return { data, loading, error };
};

export default useFetching;
