import { StyleSheet, Text, View } from "react-native";
import Accueil from "@ecrans/Accueil";
import Titre from "@composants/UI/Titre";
//import Navigation from "@navigation/Navigation";
export default function App() {
  return <Accueil></Accueil>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
