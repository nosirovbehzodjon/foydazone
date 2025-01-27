import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

interface NearbyCardProps {
  name: string;
  rating: number;
}

export function NearbyCard({ name, rating }: NearbyCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      {/* Image Placeholder */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://zbzqtmbdxrwrdgoyftqd.supabase.co/storage/v1/object/public/service-images/7e2a0a7a-0b96-4203-898f-fc58a68f5332/photo_2025-01-20_16-59-19.jpg",
          }} // Replace with actual image URL
          style={styles.image}
        />
      </View>
      {/* Details */}
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating.toFixed(1)}</Text>
          <Text style={styles.star}>⭐</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222",
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 16,
    marginVertical: 8,
    minWidth: 360,
  },
  imageContainer: {
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  star: {
    color: "#f5c518",
    marginLeft: 4,
  },
});
