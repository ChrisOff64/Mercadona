import React from "react";
import useAppelAPI from "@hooks/useAppelAPI";
//import { API_URL } from "@env";
//import gereAppContexte from "./gereAppContexte";

export default function useAPIProduitCRUD(categorie) {
  const [listeProduits, setlisteProduits] = React.useState([]);
  const { reponse, chargeJson } = useAppelAPI();
  React.useEffect(() => {
    actualiseProduits(categorie);
  }, []);

  //const recupereProduits = (categorieSelect) => {
  //  chargeJson(categorieSelect);
  //};

  async function actualiseProduits(categ) {
    //chargeJsonProduits(categ);
    var SuffUrl = "";
    if (categ) SuffUrl = "?categorie=" + categ;
    chargeJson(SuffUrl);
  }

  return { listeProduits, actualiseProduits };
}
