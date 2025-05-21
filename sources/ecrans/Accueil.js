import React, { useState } from "react";
import { StyleSheet, Image, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import useAPIProduitCRUD from "@hooks/useAPIProduitCRUD";
import Titre from "@composants/UI/Titre";
import FicheProduit from "@composants/FicheProduit";
import { Dropdown } from "react-native-element-dropdown";

export default function Accueil({}) {
  //export default function Accueil({ navigation }) {
  //const { categorie } = useAPIProduitCRUD();
  const { listeProduits, actualiseProduits } = useAPIProduitCRUD(categorie);
  const [listeCategories, setListeCategories] = useState([]);
  const [categorie, setCategorie] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  React.useEffect(() => {
    recupereCategories();
  }, []);

  const recupereCategories = () => {
    //var URL = `${API_URL}/Produits/ListeCategories`;
    var URL = `https://mercadona7app.azurewebsites.net/api/Produits/ListeCategories`;
    fetch(URL)
      .then(function (reponse) {
        return reponse.json();
      })
      .then(function (reponse) {
        setListeCategories(reponse);
      })
      .catch(console.error);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require("./img/mercadona.png")} />
      </View>

      <View>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={listeCategories}
          search
          maxHeight={300}
          labelField="libelle"
          valueField="libelle"
          placeholder={!isFocus ? "Choisir une catégorie" : "..."}
          searchPlaceholder="Recherche..."
          value={categorie}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setCategorie(item.libelle);
            actualiseProduits(item.libelle);
            setIsFocus(false);
          }}
        />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {listeProduits.map(
          //({ libelle, prix, image, remiseEnVigueur }, index) => {
          ({ produit, remiseEnVigueur }, index) => {
            return (
              <FicheProduit
                key={index}
                libelle={produit.libelle}
                prix={produit.prix}
                image={produit.image}
                remiseEnVigueur={remiseEnVigueur}
              />
            );
          }
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    justifyContent: "center",
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 117,
    height: 53,
  },
});
