import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function Information({ image, name, description }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: "80%",
  },
  image: {
    width: "70%",
    height: 200,
  },
  title: {
    fontSize: 20,
  },
  description: {
    fontSize: 15,
  },
});
