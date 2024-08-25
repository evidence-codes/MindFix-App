import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CalendarPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Booked Sessions Calendar</Text>
      {/* Implement your calendar UI here */}
      <Text>Calendar with booked dates will go here.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    padding: 16,
    marginTop: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
    textAlign: "center",
    paddingTop: 48,
  },
});

export default CalendarPage;
