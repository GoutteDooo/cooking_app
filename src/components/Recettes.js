import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Recettes = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => setData(res.data.meals || []))
      .catch((err) => {
        console.log(err);

        setData([]); // En cas d'erreur, on retourne un tableau vide
      });
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="recettes">
      <div className="search-container">
        <label htmlFor="search">Recherche</label>
        <input
          type="text"
          id="search"
          placeholder="Tapez le nom d'un aliment"
          onChange={(e) => handleSearchChange(e)}
        />
      </div>
      <h1>Recettes</h1>
      <ul>
        {data &&
          data
            .slice(0, 24)
            .map((recette, index) => <Card key={index} recette={recette} />)}
        {/* {data.length > 0 ? (
          data
            .slice(0, 24)
            .map((recette, index) => <Card key={index} recette={recette} />)
        ) : (
          <p>Aucune recette trouvée.</p>
        )} */}
      </ul>
    </div>
  );
};

export default Recettes;
