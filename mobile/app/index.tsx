import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.conatainer}
    >
      <Text style={{ color: "blue" }}>
        Edit app/index.tsx to edit this screen.</Text>
        <Link href={'/about'}>About</Link>

        <Image source={{ uri : "https://c8.alamy.com/comp/2WC6W8A/shinchan-cute-vector-2WC6W8A.jpg" }} style={{ width: 100, height: 100}}>
        </Image>

    </View>
  );
}


const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  }
});