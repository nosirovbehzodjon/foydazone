import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import icon from "@/assets/images/icon.png";
import avatar from "@/assets/images/avatar.jpg";

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Foydazone</Text>
      <View style={styles.icons}>
        <TouchableOpacity>
          <Image source={icon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.account}>
            <Image source={avatar} style={styles.avatar} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 36,
    backgroundColor: "#000",
    backgroundColor: "red",
  },
  logo: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  avatar: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  account: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "green",
    overflow: "hidden",
  },
});
