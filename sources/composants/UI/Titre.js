import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Titre({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: { marginBottom: 20, fontSize: 20, fontWeight: "600" },
});
