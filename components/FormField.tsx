import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  keyboardType: string | null;
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-black font-pmedium">{title}</Text>

      <View
        className="border border-black w-full h-16 px-4 
      bg-white rounded-2xl focus:border-red-400 items-center flex-row"
      >
        <TextInput
          className="flex-1 text-black font-pmedium text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
        />
      </View>
    </View>
  );
};

export default FormField;
