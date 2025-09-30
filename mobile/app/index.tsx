import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.conatainer} >
      <Text style={{ color: "blue" }}>
        Edit app/index.tsx to edit this screen.</Text>
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