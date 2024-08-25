import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type Message = {
  text: string;
  sender: "user" | "ai";
};

const saveMessageToHistory = async (newMessage: Message) => {
  try {
    const historyJson = await SecureStore.getItemAsync("chatHistory");
    const history = historyJson ? JSON.parse(historyJson) : [];
    history.push(newMessage);
    await SecureStore.setItemAsync("chatHistory", JSON.stringify(history));
  } catch (error) {
    console.error("Failed to save message to history:", error);
  }
};

const getMessageHistory = async (): Promise<Message[]> => {
  try {
    const historyJson = await SecureStore.getItemAsync("chatHistory");
    return historyJson ? JSON.parse(historyJson) : [];
  } catch (error) {
    console.error("Failed to get message history:", error);
    return [];
  }
};

const ChatBotScreen: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null); // Reference for FlatList

  useEffect(() => {
    const loadMessageHistory = async () => {
      const history = await getMessageHistory();
      setMessages(history);
    };

    loadMessageHistory();
  }, []);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]); // Scroll to end whenever messages array is updated

  const handleSend = async () => {
    if (message.trim() === "") return;

    const userMessage: Message = { text: message, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setMessage("");

    setLoading(true);

    try {
      await saveMessageToHistory(userMessage);
      const history = await getMessageHistory();

      const response = await fetch(
        "https://fd58-197-210-226-231.ngrok-free.app/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
            history_data: history,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const aiMessage: Message = { text: data.reply, sender: "ai" };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      await saveMessageToHistory(aiMessage);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        text: "Something went wrong. Please try again.",
        sender: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef} // Attach reference to FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.message,
              item.sender === "user" ? styles.userMessage : styles.aiMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        } // Ensure scroll to end when the content changes
      />
      {loading && (
        <View style={[styles.message, styles.aiMessage]}>
          <ActivityIndicator size="small" color="#333" />
        </View>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text>
            <FontAwesome name="paper-plane" size={24} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    paddingTop: 48,
  },
  message: {
    marginVertical: 8,
    padding: 12,
    borderRadius: 20,
    maxWidth: "75%",
    marginLeft: 10,
    marginRight: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
    borderTopRightRadius: 0,
  },
  aiMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#ECECEC",
    borderTopLeftRadius: 0,
  },
  messageText: {
    color: "#333",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#F1F1F1",
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#333",
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#34B7F1",
    padding: 10,
    borderRadius: 20,
  },
});

export default ChatBotScreen;
