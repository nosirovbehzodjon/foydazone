import { NearbyCard } from "@/components/cards/nearby/NearbyCard";
import { PartnerCard } from "@/components/cards/partner/PartnerCard";
import { CategoryItem } from "@/components/category/CategoryItem";
import { Header } from "@/components/header/Header";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const partners = [
  { id: 1, name: "Geske / Omorovicza" },
  { id: 2, name: "Dzen Yoga" },
  { id: 3, name: "Crossfit" },
  { id: 4, name: "Pilates & Aerobics" },
];

const nearbyPlaces = [
  { id: 1, name: "Shine Studio Oybek", rating: 4.6 },
  { id: 2, name: "Another Studio", rating: 4.2 },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            "Pool",
            "Women",
            "Pilates & Aerobics",
            "Yoga",
            "Crossfit",
            "Studio",
          ].map((item, index) => (
            <View key={index} style={[index === 0 && { marginLeft: 16 }]}>
              <CategoryItem name={item} />
            </View>
          ))}
        </ScrollView>

        {/* New Partners */}
        <Text style={styles.sectionTitle}>New Partners</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {partners.map((partner, index) => (
            <View
              key={partner.id}
              style={[styles.cardWrapper, index === 0 && { marginLeft: 16 }]}
            >
              <PartnerCard name={partner.name} />
            </View>
          ))}
        </ScrollView>

        {/* Nearby */}
        <Text style={styles.sectionTitle}>Nearby</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {nearbyPlaces.map((place, index) => (
            <View
              key={place.id}
              style={[styles.cardWrapper, index === 0 && { marginLeft: 16 }]}
            >
              <NearbyCard name={place.name} rating={place.rating} />
            </View>
          ))}
        </ScrollView>
        {/* Nearby */}
        <Text style={styles.sectionTitle}>Around</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {nearbyPlaces.map((place, index) => (
            <View
              key={place.id}
              style={[styles.cardWrapper, index === 0 && { marginLeft: 16 }]}
            >
              <NearbyCard name={place.name} rating={place.rating} />
            </View>
          ))}
        </ScrollView>
        {/* Nearby */}
        <Text style={styles.sectionTitle}>Global</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {nearbyPlaces.map((place, index) => (
            <View
              key={place.id}
              style={[styles.cardWrapper, index === 0 && { marginLeft: 16 }]}
            >
              <NearbyCard name={place.name} rating={place.rating} />
            </View>
          ))}
        </ScrollView>
        {/* Nearby */}
        <Text style={styles.sectionTitle}>Nearby</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {nearbyPlaces.map((place, index) => (
            <View
              key={place.id}
              style={[styles.cardWrapper, index === 0 && { marginLeft: 16 }]}
            >
              <NearbyCard name={place.name} rating={place.rating} />
            </View>
          ))}
        </ScrollView>
        {/* Nearby */}
        <Text style={styles.sectionTitle}>Nearby</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {nearbyPlaces.map((place, index) => (
            <View
              key={place.id}
              style={[styles.cardWrapper, index === 0 && { marginLeft: 16 }]}
            >
              <NearbyCard name={place.name} rating={place.rating} />
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginHorizontal: 16,
    marginVertical: 8,
  },

  cardWrapper: {
    marginBottom: 0,
  },
});
