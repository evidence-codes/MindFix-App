import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import React, { ReactNode } from "react";

interface CustomButtonProps {
  title: string | ReactNode;
  handlePress: () => void;
  containerStyles?: string; // Or StyleProp<ViewStyle> if using StyleSheet
  textStyles?: string; // Or StyleProp<TextStyle> if using StyleSheet
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles = "", // Default to an empty string
  textStyles = "", // Default to an empty string
  isLoading = false, // Default to false
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-[#4DB6AC] rounded-xl min-h-[62px] justify-center items-center 
      ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text className={`text-white font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
