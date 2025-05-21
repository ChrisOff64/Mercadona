import React from "react";
//import { API_URL } from "@env";

export default function useAppelAPI() {
  async function chargeJson(suffixe, compteur = 0) {
    //var URL = `${API_URL}/Produits`;

    var nbEssai = compteur + 1;
    console.log(nbEssai);

    var url = "https://mercadona7app.azurewebsites.net/api/Produits";
    if (suffixe) url += suffixe;
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
              return chargeJson(categ, nbEssai);
            }, 1000);
          } else {
            console.error("Parsing error:", e);
          }
        } else {
          console.error(err);
        }
      });
  }

  return { chargeJson };
}
