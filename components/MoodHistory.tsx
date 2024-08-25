import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Provider, Modal, Portal, Button } from "react-native-paper";
import CalendarPicker from "react-native-calendar-picker";

const MoodHistory = () => {
  const [startDateVisible, setStartDateVisible] = useState(false);
  const [endDateVisible, setEndDateVisible] = useState(false);
  const [startDate, setStartDate] = useState("Select Start Date");
  const [endDate, setEndDate] = useState("Select End Date");

  const handleStartDateChange = (date: Date) => {
    setStartDate(date.toISOString().split("T")[0]);
    setStartDateVisible(false);
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date.toISOString().split("T")[0]);
    setEndDateVisible(false);
  };

  const fetchMoodHistory = () => {
    // Logic to fetch mood history goes here
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Text style={styles.title}>Mood History</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setStartDateVisible(true)}
        >
          <Text style={styles.buttonText}>{startDate}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setEndDateVisible(true)}
        >
          <Text style={styles.buttonText}>{endDate}</Text>
        </TouchableOpacity>

        {/* Enter Button */}
        <TouchableOpacity style={styles.enterButton} onPress={fetchMoodHistory}>
          <Text style={styles.enterButtonText}>Enter</Text>
        </TouchableOpacity>

        {/* Start Date Modal */}
        <Portal>
          <Modal
            visible={startDateVisible}
            onDismiss={() => setStartDateVisible(false)}
            contentContainerStyle={styles.modalContent}
          >
            <CalendarPicker
              onDateChange={handleStartDateChange}
              selectedStartDate={startDate ? new Date(startDate) : undefined}
            />
            <Button mode="contained" onPress={() => setStartDateVisible(false)}>
              Done
            </Button>
          </Modal>
        </Portal>

        {/* End Date Modal */}
        <Portal>
          <Modal
            visible={endDateVisible}
            onDismiss={() => setEndDateVisible(false)}
            contentContainerStyle={styles.modalContent}
          >
            <CalendarPicker
              onDateChange={handleEndDateChange}
              selectedStartDate={endDate ? new Date(endDate) : undefined}
            />
            <Button mode="contained" onPress={() => setEndDateVisible(false)}>
              Done
            </Button>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
  },
  enterButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 15,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
  },
  enterButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  modalContent: {
    padding: 20,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 5,
  },
});

export default MoodHistory;
