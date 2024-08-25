import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

const Welcome = () => {
  return (
    <SafeAreaView className="bg-[#FAF9F6] h-full">
      <View className="w-full flex justify-center items-center h-full px-4">
        {/* Large Icon */}
        <FontAwesome name="hospital-o" size={100} color="#4DB6AC" />

        {/* App Introduction */}
        <View className="relative mt-5">
          <Text
            className="text-3xl font-psemibold text-center"
            style={{ color: "#2E2E38" }}
          >
            Welcome to{" "}
            <Text className="text-3xl" style={{ color: "#4DB6AC" }}>
              MindFix
            </Text>
          </Text>
          <Text
            className="text-xl font-pmedium text-center mt-4"
            style={{ color: "#2E2E38" }}
          >
            Your AI-powered Mental Health Companion
          </Text>
        </View>

        {/* Tagline or Description */}
        <Text
          className="text-sm font-pregular text-center mt-7"
          style={{ color: "#2E2E38" }}
        >
          Empowering you with personalized mental health support anytime,
          anywhere.
        </Text>

        {/* Continue Button */}
        <CustomButton
          title="Get Started"
          handlePress={() => router.push("/sign-up")}
          containerStyles="w-full mt-7"
          // buttonStyles={{ backgroundColor: "#4DB6AC" }} // Set the button color to match the app's color
          // textStyles={{ color: "#FFF" }} // Ensure the text is white for contrast
        />
      </View>

      <StatusBar backgroundColor="#FAF9F6" style="dark" />
    </SafeAreaView>
  );
};

export default Welcome;
