import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// TabIcon Component: Used to customize the look of the tab icons
const TabIcon = ({
  iconName,
  color,
  name,
  focused,
  iconLibrary: IconComponent,
}: {
  iconName: string;
  color: string;
  name: string;
  focused: boolean;
  iconLibrary: any;
}) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <IconComponent name={iconName} size={24} color={color} />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

// TabLayout Component: Defines the structure of the tab navigation
const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#4DB6AC", // Updated active tab icon color
          tabBarInactiveTintColor: "#B0BEC5", // Updated inactive tab icon color
          tabBarShowLabel: false, // Hide default labels
          tabBarStyle: {
            backgroundColor: "#2E2E38", // Updated tab bar background color
            borderTopWidth: 1,
            borderTopColor: "#383842",
            height: 84,
          },
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false, // Hides the header for this tab
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName="home" // FontAwesome home icon
                color={color}
                name="Home"
                focused={focused}
                iconLibrary={FontAwesome}
              />
            ),
          }}
        />

        {/* Virtual Consultations Tab */}
        <Tabs.Screen
          name="virtual-consultations"
          options={{
            title: "Virtual Consultations",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName="video-camera" // FontAwesome video camera icon
                color={color}
                name="Sessions"
                focused={focused}
                iconLibrary={FontAwesome}
              />
            ),
          }}
        />

        {/* AI Bot Tab */}
        <Tabs.Screen
          name="bot"
          options={{
            title: "AI Bot",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName="robot" // MaterialCommunityIcons robot icon
                color={color}
                name="AI Bot"
                focused={focused}
                iconLibrary={MaterialCommunityIcons}
              />
            ),
          }}
        />

        {/* Resources Tab (Replaced Emotional Analysis) */}
        <Tabs.Screen
          name="resources"
          options={{
            title: "Resources",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName="book" // FontAwesome book icon
                color={color}
                name="Resource"
                focused={focused}
                iconLibrary={FontAwesome}
              />
            ),
          }}
        />

        {/* Profile Tab */}
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName="user" // FontAwesome user icon
                color={color}
                name="Profile"
                focused={focused}
                iconLibrary={FontAwesome}
              />
            ),
          }}
        />
      </Tabs>

      {/* StatusBar for consistent appearance */}
      <StatusBar backgroundColor="#2E2E38" style="light" />
    </>
  );
};

export default TabLayout;
