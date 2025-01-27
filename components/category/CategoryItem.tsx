import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface CategoryItemProps {
  name: string;
}

export function CategoryItem({ name }: CategoryItemProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.icon} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 70,
    marginRight: 10,
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#444",
    marginBottom: 8,
  },
  text: {
    color: "#fff",
    fontSize: 12,
  },
});
