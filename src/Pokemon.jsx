import React, { useEffect, useState } from 'react'
import { fetchData } from './apiService';

export default function Pokemon({ name }) {
const [data, setData] = useState({});

    useEffect(() => {
        async function load() {
            try {
                const pokemon = await fetchData(
                    "https://pokeapi.co/api/v2/pokemon/" + name
                );
                setData(pokemon);
            } catch (error) {
                console.error(error);
            }
        }
        load();
        console.log(data)
    }, [name]);
  return (
<div>
    <h1>{data.name}</h1>
</div>
);
}
