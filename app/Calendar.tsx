import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Modal,
  Button,
} from "react-native";
import { Calendar, DateCallbackHandler } from "react-native-calendars";

const CalendarPage = () => {
  const [selectedSession, setSelectedSession] = useState<{
    doctorName: string;
    specialization: string;
    location: string;
    time: string;
  } | null>(null);

  const [modalVisible, setModalVisible] = useState(false);

  // Mocked data for booked sessions
  const sessions: {
    [key: string]: {
      doctorName: string;
      specialization: string;
      location: string;
      time: string;
    };
  } = {
    "2024-08-23": {
      doctorName: "Dr. Jane Doe",
      specialization: "Clinical Psychologist",
      location: "New York",
      time: "10:00 AM",
    },
    "2024-08-25": {
      doctorName: "Dr. John Smith",
      specialization: "Cognitive Behavioral Therapist",
      location: "Los Angeles",
      time: "02:00 PM",
    },
  };

  const handleDayPress: DateCallbackHandler = (day) => {
    const session = sessions[day.dateString];
    if (session) {
      setSelectedSession(session);
      setModalVisible(true);
    } else {
      console.log("No session booked on this day.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Booked Sessions</Text>
      <View style={styles.calendarContainer}>
        <Calendar
          current={"2024-08-23"}
          minDate={"2024-01-01"}
          maxDate={"2024-12-31"}
          monthFormat={"yyyy MM"}
          markedDates={{
            "2024-08-23": { selected: true, marked: true, dotColor: "red" },
            "2024-08-25": { selected: true, marked: true, dotColor: "blue" },
          }}
          onDayPress={handleDayPress}
        />
      </View>

      {/* Modal for session details */}
      {selectedSession && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Doctor: {selectedSession.doctorName}
            </Text>
            <Text style={styles.modalText}>
              Specialization: {selectedSession.specialization}
            </Text>
            <Text style={styles.modalText}>
              Location: {selectedSession.location}
            </Text>
            <Text style={styles.modalText}>Time: {selectedSession.time}</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    padding: 16,
    paddingTop: 96,
    fontFamily: "Poppins-SemiBold",
  },
  title: {
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "Poppins-SemiBold",
    marginBottom: 16,
    color: "#333",
    textAlign: "center",
  },
  calendarContainer: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    fontFamily: "Poppins-SemiBold",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
});

export default CalendarPage;
