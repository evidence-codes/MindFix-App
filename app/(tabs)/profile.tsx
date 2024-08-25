import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { icons, images } from "@/constants";

const Profile = () => {
  const userName = "Evidence"; // Replace with dynamic user data
  const userEmail = "evidence@example.com"; // Replace with dynamic user data

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Picture and Name */}
      <View style={styles.profileHeader}>
        <Image
          source={images.profile} // Replace with actual user profile image URL
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>
      </View>

      {/* Profile Options */}
      <View style={styles.profileOptions}>
        <TouchableOpacity style={styles.optionItem}>
          <FontAwesome name="user" size={24} color="#4DB6AC" />
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <MaterialIcons name="settings" size={24} color="#4DB6AC" />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <FontAwesome name="bell" size={24} color="#4DB6AC" />
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <MaterialIcons name="logout" size={24} color="#4DB6AC" />
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    paddingHorizontal: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "Poppins-SemiBold",
    color: "#2E2E38",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: "#2E2E38",
    fontFamily: "Poppins-Regular",
  },
  profileOptions: {
    marginTop: 20,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  optionText: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    color: "#2E2E38",
    marginLeft: 15,
  },
});

export default Profile;
