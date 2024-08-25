import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { icons } from "../constants";
import { Link, router } from "expo-router";

const ChatBotWidget = () => {
  return (
    <TouchableOpacity
      style={styles.widgetContainer}
      onPress={() => router.replace("/(tabs)/bot")}
    >
      <View style={styles.widgetContent}>
        <Image source={icons.plus} style={styles.icon} />
        <Text style={styles.text}>Chat AI</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  widgetContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#FF9C01",
    borderRadius: 50,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  widgetContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ChatBotWidget;
