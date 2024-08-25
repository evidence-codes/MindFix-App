import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Modal,
  FlatList,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import { Menu, Provider, Button, Card } from "react-native-paper";

const MoodTracking = () => {
  const [visible, setVisible] = useState(false);
  const [selectedMood, setSelectedMood] = useState("How do you feel?");
  const [copingStrategies, setCopingStrategies] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [note, setNote] = useState("");
  const [randomStrategy, setRandomStrategy] = useState("");

  const moodStrategies = {
    Happy: [
      "Take a 10-minute walk",
      "Practice deep breathing exercises",
      "Write down three things you are grateful for",
      "Listen to calming music",
      "Read a book",
      "Do some light stretching",
      "Meditate for 5 minutes",
      "Call a friend or family member",
      "Practice mindfulness",
      "Write a journal entry",
      "Watch a funny video",
      "Try a new hobby",
      "Take a relaxing bath",
      "Go for a bike ride",
      "Practice yoga",
      "Try a guided relaxation exercise",
      "Organize a small space in your home",
      "Engage in a creative activity",
      "Spend time in nature",
      "Practice gratitude",
      "Do a puzzle or brain game",
    ],
    Sad: [
      "Write a letter to yourself",
      "Listen to your favorite music",
      "Try a new activity or hobby",
      "Reach out to a supportive friend",
      "Practice positive affirmations",
      "Take a warm bath",
      "Engage in a creative project",
      "Do a guided meditation",
      "Take a break from social media",
      "Read an inspiring book",
      "Spend time with a pet",
      "Try a relaxation exercise",
      "Watch a motivational video",
      "Practice self-compassion",
      "Do a small act of kindness",
      "Journal your thoughts and feelings",
      "Take a short walk in nature",
      "Practice deep breathing",
      "Create a vision board",
      "Try a new recipe",
    ],
    Excited: [
      "Plan your next adventure",
      "Start a new project",
      "Celebrate with a small treat",
      "Share your excitement with someone",
      "Do something creative",
      "Take a moment to reflect",
      "Write down your goals",
      "Create a celebration playlist",
      "Practice gratitude",
      "Engage in a physical activity",
      "Try a new workout",
      "Visit a place you love",
      "Watch a fun movie",
      "Try a new hobby",
      "Cook your favorite meal",
      "Spend time with loved ones",
      "Practice mindfulness",
      "Take a moment to relax",
      "Reflect on your achievements",
      "Write a journal entry",
    ],
    Angry: [
      "Practice deep breathing exercises",
      "Engage in physical exercise",
      "Write down your feelings",
      "Talk to a trusted friend",
      "Try progressive muscle relaxation",
      "Take a break and cool down",
      "Engage in a calming activity",
      "Practice mindfulness meditation",
      "Do a creative project",
      "Listen to soothing music",
      "Take a walk outside",
      "Journal your thoughts",
      "Try a relaxation technique",
      "Do some light stretching",
      "Engage in a hobby",
      "Practice self-compassion",
      "Try guided imagery",
      "Read an inspiring book",
      "Practice positive affirmations",
      "Take a few moments to reflect",
    ],
  };

  useEffect(() => {
    const defaultMood = "Happy";
    if (moodStrategies[defaultMood as keyof typeof moodStrategies]) {
      setCopingStrategies(
        getRandomStrategies(
          moodStrategies[defaultMood as keyof typeof moodStrategies],
          5
        )
      );
    }
  }, []);

  const showMenu = () => setVisible(true);
  const hideMenu = () => setVisible(false);

  const onSelectMood = (mood: string) => {
    setSelectedMood(mood);
    hideMenu();
  };

  const handleNoteSubmit = () => {
    if (note.trim() !== "" && selectedMood !== "How do you feel?") {
      const strategies =
        moodStrategies[selectedMood as keyof typeof moodStrategies];
      setRandomStrategy(
        strategies[Math.floor(Math.random() * strategies.length)]
      );
      setCopingStrategies(getRandomStrategies(strategies, 5));
      setModalVisible(true);
      setNote("");
      Keyboard.dismiss();
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    if (event.nativeEvent.key === "Enter") {
      event.preventDefault();
      handleNoteSubmit();
    }
  };

  const getRandomStrategies = (strategies: string[], count: number) => {
    const shuffled = strategies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Text style={styles.title}>What is your mood today?</Text>
        <Menu
          visible={visible}
          onDismiss={hideMenu}
          anchor={
            <TouchableOpacity style={styles.moodButton} onPress={showMenu}>
              <Text style={styles.moodText} className="font-pregular ">
                {selectedMood}
              </Text>
            </TouchableOpacity>
          }
        >
          <Menu.Item onPress={() => onSelectMood("Happy")} title="Happy" />
          <Menu.Item onPress={() => onSelectMood("Sad")} title="Sad" />
          <Menu.Item onPress={() => onSelectMood("Excited")} title="Excited" />
          <Menu.Item onPress={() => onSelectMood("Angry")} title="Angry" />
        </Menu>
        <TextInput
          style={styles.noteInput}
          placeholder="Note"
          multiline
          value={note}
          onChangeText={setNote}
          onKeyPress={handleKeyPress}
        />
        <Modal
          visible={modalVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Coping Strategy</Text>
              <Text style={styles.modalBody}>Try this out today:</Text>
              <Text style={styles.modalStrategy}>{randomStrategy}</Text>
              <Button mode="contained" onPress={() => setModalVisible(false)}>
                Close
              </Button>
            </View>
          </View>
        </Modal>

        <Text style={styles.strategyTitle}>Coping Strategies for Today</Text>
        <FlatList
          data={copingStrategies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card style={styles.strategyCard}>
              <Card.Content>
                <Text style={styles.strategyText}>{item}</Text>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "Poppins-Regular", // Apply Poppins font
    padding: 16,
    backgroundColor: "#F0F4F8",
    flex: 1,
    borderRadius: 20,
  },
  title: {
    fontFamily: "Poppins-SemiBold", // Apply Poppins font
    fontSize: 20,
    // fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  moodButton: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#FFF",
    fontFamily: "Poppins-Regular", // Apply Poppins font
  },
  moodText: {
    fontFamily: "Poppins-Regular", // Apply Poppins font
    fontSize: 18,
    color: "#555",
  },
  noteInput: {
    fontFamily: "Poppins-Regular", // Apply Poppins font
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    height: 100,
    marginTop: 16,
    textAlignVertical: "top",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Poppins-Regular", // Apply Poppins font
  },
  modalContent: {
    backgroundColor: "#FFF",
    padding: 24,
    borderRadius: 10,
    fontFamily: "Poppins-Regular", // Apply Poppins font
    alignItems: "center",
    width: "80%",
  },
  modalTitle: {
    fontFamily: "Poppins-SemiBold", // Apply Poppins font
    fontSize: 22,
    // fontWeight: "bold",
    marginBottom: 16,
  },
  modalBody: {
    fontFamily: "Poppins-Regular", // Apply Poppins font
    fontSize: 18,
    marginBottom: 12,
  },
  modalStrategy: {
    fontFamily: "Poppins-SemiBold", // Apply Poppins font
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
    color: "#007bff",
  },
  strategyTitle: {
    fontFamily: "Poppins-SemiBold", // Apply Poppins font
    fontSize: 20,
    // fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
  },
  strategyCard: {
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
  },
  strategyText: {
    fontFamily: "Poppins-Regular", // Apply Poppins font
    fontSize: 16,
    color: "#333",
  },
});

export default MoodTracking;
