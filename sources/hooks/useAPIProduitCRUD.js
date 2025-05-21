import React from "react";
//import { API_URL } from "@env";
//import gereAppContexte from "./gereAppContexte";

export default function useAPIProduitCRUD(categorie) {
  const [listeProduits, setlisteProduits] = React.useState([]);
  React.useEffect(() => {
    recupereProduits(categorie);
  }, []);

  const recupereProduits = (categorieSelect) => {
    var URL = "https://mercadona7app.azurewebsites.net/api/Produits";
    //var URL = `${API_URL}/Produits`;
    if (categorieSelect) URL += "?categorie=" + categorieSelect;

    fetch(URL)
      .then(function (reponse) {
        return reponse.json();
      })
      .then(function (reponse) {
        //console.log(JSON.stringify(reponse));
        setlisteProduits(reponse);
      })
      .catch(console.error);
  };

  async function actualiseProduits(categ) {
    recupereProduits(categ);
  }

  return { listeProduits, actualiseProduits };
}
