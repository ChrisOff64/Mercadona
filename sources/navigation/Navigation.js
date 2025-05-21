import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Accueil from "@ecrans/Accueil";
//import ProduitAjoute from "@ecrans/ProduitAjoute";

export default function Navigation() {
  const MaPileEcrans = createStackNavigator();

  return (
    <NavigationContainer>
      <MaPileEcrans.Navigator mode="modal">
        <MaPileEcrans.Screen
          name="Accueil"
          component={Accueil}
          options={{ headerShown: false }}
        />
      </MaPileEcrans.Navigator>
    </NavigationContainer>
  );
}
