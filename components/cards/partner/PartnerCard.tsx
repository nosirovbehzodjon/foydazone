import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

interface PartnerCardProps {
  name: string;
}

export function PartnerCard({ name }: PartnerCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      {/* Image Placeholder */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://zbzqtmbdxrwrdgoyftqd.supabase.co/storage/v1/object/public/service-images/7e2a0a7a-0b96-4203-898f-fc58a68f5332/photo_2025-01-20_16-59-25.jpg",
          }} // Replace with actual image URL
          style={styles.image}
        />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>DISCOUNT</Text>
        </View>
      </View>
      {/* Name */}
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222",
    borderRadius: 12,
    marginRight: 16,
    overflow: "hidden",
    width: 150,
  },
  imageContainer: {
    position: "relative",
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  discountBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#0f0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000",
  },
  name: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    padding: 8,
  },
});
