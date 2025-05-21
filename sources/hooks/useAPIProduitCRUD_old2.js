import React from "react";
import useAppelAPI from "@hooks/useAppelAPI";
//import { API_URL } from "@env";
//import gereAppContexte from "./gereAppContexte";

export default function useAPIProduitCRUD(categorie) {
  const [listeProduits, setlisteProduits] = React.useState([]);
  const { chargeJson } = useAppelAPI();
  React.useEffect(() => {
    chargeJson(categorie);
  }, []);

  function chargeJsonProduits(categ, compteur = 0) {
    //var URL = `${API_URL}/Produits`;

    var nbEssai = compteur + 1;
    console.log(nbEssai);

    var url = "https://mercadona7app.azurewebsites.net/api/Produits";
    if (categ) url += "?categorie=" + categ;
    console.log(url);
    fetch(url)
      .then(function (reponse) {
        //console.log(JSON.stringify(reponse));
        return reponse.json();
      })
      .then(function (reponse) {
        setlisteProduits(reponse);
      })
      .catch((err) => {
        console.log(err.name);
        console.log(nbEssai);
        //if (err.name == "SyntaxError") {
        if (err instanceof SyntaxError) {
          if (nbEssai < 5) {
            setTimeout(() => {
              return chargeJsonProduits(categ, nbEssai);
            }, 1000);
          } else {
            console.error("Parsing error:", e);
          }
        } else {
          console.error(err);
        }
      });
    //.catch(console.error);
    //    return fetch(url).then((response) => {
    //      if (response.status == 200) {
    //        return response.json();
    //      } else {
    //        throw new HttpError(response);
    //      }
    //    });
  }

  //const recupereProduits = (categorieSelect) => {
  //  chargeJson(categorieSelect);
  //};

  async function actualiseProduits(categ) {
    //chargeJsonProduits(categ);
    chargeJson(categ);
  }

  return { listeProduits, actualiseProduits };
}
