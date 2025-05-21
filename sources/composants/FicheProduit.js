import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

function FormatePrix(valeurPrix) {
  return valeurPrix.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
}

function CalculePromotion(prixProduit, remise) {
  //console.log(remise);
  if (remise) {
    var valeurRemise = prixProduit * (1 - remise / 100);
    return valeurRemise;
  }
  return 0;
}
function AffichePromotion(prixRemise) {
  if (prixRemise > 0) {
    return FormatePrix(prixRemise);
  }
  return "";
}

export default function FicheProduit({
  libelle,
  prix,
  image,
  remiseEnVigueur,
}) {
  const prixRemise = CalculePromotion(prix, remiseEnVigueur);
  const textDecorationLine = prixRemise > 0 ? "line-through" : "none";
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={{ width: 80, height: 80 }} />
      <View>
        <Text style={styles.libelle}>{libelle}</Text>
        <Text style={[styles.prix, { textDecorationLine: textDecorationLine }]}>
          {FormatePrix(prix)}
        </Text>
        <Text style={styles.prixRemise}>{AffichePromotion(prixRemise)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(60,60,67,0.6)",
    width: "100%",
    paddingBottom: 16,
    marginBottom: 16,
  },
  checkBox: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "rgba(60,60,67,0.6)",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  libelle: {
    fontWeight: "500",
    marginBottom: 4,
    fontSize: 14,
    color: "#323c41",
  },
  prix: {
    color: "#323c41",
    fontWeight: "900",
    fontSize: 15,
    marginBottom: 8,
  },
  prixRemise: {
    color: "red",
    fontWeight: "900",
    fontSize: 15,
    marginBottom: 8,
  },
  deleteText: {
    color: "rgba(0,122,255,1)",
    fontSize: 15,
    fontWeight: "600",
  },
});
