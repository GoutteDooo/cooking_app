import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Card = ({ recette }) => {
  // Créer un tableau d'éléments pour les ingrédients
  const ingredientsList = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recette[`strIngredient${i}`];
    const measure = recette[`strMeasure${i}`];

    if (ingredient) {
      ingredientsList.push(
        <li key={i}>
          {measure} : {ingredient}
          <br />
        </li>
      );
    } else {
      break;
    }
  }
  return (
    <div className="card">
      <li>
        <h3>{recette.strMeal}</h3>
        <img src={recette.strMealThumb} alt={`photo de ${recette.strMeal}`} />
        <ul>
          <h5>Ingrédients</h5>
          {ingredientsList}
          <div className="cardLinks">
            <div className="ytLink">
              <a
                href={recette.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="ytLink fa-2x" />
              </a>
            </div>
            <div className="sourceLink">
              <a
                href={recette.strSource}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="sourceLink fa-2x" />
              </a>
            </div>
          </div>
        </ul>
      </li>
    </div>
  );
};

export default Card;
