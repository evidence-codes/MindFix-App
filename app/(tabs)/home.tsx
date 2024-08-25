import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { images } from "../../constants";
import MoodTracking from "@/components/MoodTracking";
import MoodHistory from "@/components/MoodHistory";
import ChatBotWidget from "@/components/ChatBotWidget"; // Import the new widget component
import { router } from "expo-router";

const Home = () => {
  const userName = "Evidence"; // Replace with actual user name from context or state

  // Function to handle opening the chatbot section
  const openChatBot = () => {
    // Implement navigation or logic to open the chatbot section
    console.log("Opening ChatBot...");
  };

  return (
    <SafeAreaView className="bg-[#FAF9F6] flex-1 px-4 py-6 font-pregular">
      {/* Header with profile and notifications icons */}
      <View className="flex-row justify-between items-center mb-6">
        <View className="flex-row items-center space-x-1">
          <TouchableOpacity onPress={() => router.push("/(tabs)/profile")}>
            <Image source={images.profile} className="w-8 h-8 rounded-full" />
          </TouchableOpacity>
          <Text className="text-xl font-psemibold text-black">
            Hello, {userName}
          </Text>
        </View>

        <TouchableOpacity>
          <Image source={images.notification} className="w-6 h-6" />
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <MoodTracking />
      {/* <MoodHistory /> */}

      {/* ChatBot Widget */}
      {/* <ChatBotWidget onPress={openChatBot} /> */}
    </SafeAreaView>
  );
};

export default Home;
