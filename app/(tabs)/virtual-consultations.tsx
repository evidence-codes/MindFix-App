import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import { Avatar, Card, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface Therapist {
  id: string;
  name: string;
  location: string;
  specialty: string;
  icon: string;
}

const therapistsData = [
  {
    id: "1",
    name: "Dr. Jane Doe",
    location: "Lagos, Lagos State",
    specialty: "Anxiety",
    icon: "account-circle",
  },
  {
    id: "2",
    name: "Dr. John Smith",
    location: "Abuja, FCT",
    specialty: "Depression",
    icon: "account-circle-outline",
  },
  {
    id: "3",
    name: "Dr. Emily Brown",
    location: "Port Harcourt, Rivers State",
    specialty: "Stress Management",
    icon: "account",
  },
  {
    id: "4",
    name: "Dr. Michael Lee",
    location: "Kano, Kano State",
    specialty: "Couples Therapy",
    icon: "account-outline",
  },
  {
    id: "5",
    name: "Dr. Sarah Green",
    location: "Ibadan, Oyo State",
    specialty: "Grief Counseling",
    icon: "account-box",
  },
  {
    id: "6",
    name: "Dr. Robert King",
    location: "Enugu, Enugu State",
    specialty: "Addiction",
    icon: "account-box-outline",
  },
  {
    id: "7",
    name: "Dr. Laura White",
    location: "Benin City, Edo State",
    specialty: "Trauma",
    icon: "account-star",
  },
  {
    id: "8",
    name: "Dr. James Wilson",
    location: "Jos, Plateau State",
    specialty: "Child Psychology",
    icon: "account-star-outline",
  },
  {
    id: "9",
    name: "Dr. Amanda Clark",
    location: "Abeokuta, Ogun State",
    specialty: "PTSD",
    icon: "account-multiple",
  },
  {
    id: "10",
    name: "Dr. David Miller",
    location: "Onitsha, Anambra State",
    specialty: "Eating Disorders",
    icon: "account-multiple-outline",
  },
  {
    id: "11",
    name: "Dr. Jessica Turner",
    location: "Ilorin, Kwara State",
    specialty: "Marriage Counseling",
    icon: "account-check",
  },
  {
    id: "12",
    name: "Dr. Kevin Parker",
    location: "Owerri, Imo State",
    specialty: "Anger Management",
    icon: "account-check-outline",
  },
  {
    id: "13",
    name: "Dr. Nancy Adams",
    location: "Akure, Ondo State",
    specialty: "Sleep Disorders",
    icon: "account-key",
  },
  {
    id: "14",
    name: "Dr. Frank Thomas",
    location: "Uyo, Akwa Ibom State",
    specialty: "Phobias",
    icon: "account-key-outline",
  },
  {
    id: "15",
    name: "Dr. Lisa Walker",
    location: "Kaduna, Kaduna State",
    specialty: "OCD",
    icon: "account-settings",
  },
  {
    id: "16",
    name: "Dr. George Harris",
    location: "Makurdi, Benue State",
    specialty: "Bipolar Disorder",
    icon: "account-settings-outline",
  },
  {
    id: "17",
    name: "Dr. Amy Roberts",
    location: "Ado-Ekiti, Ekiti State",
    specialty: "Schizophrenia",
    icon: "account-switch",
  },
  {
    id: "18",
    name: "Dr. Brian Davis",
    location: "Warri, Delta State",
    specialty: "Borderline Personality Disorder",
    icon: "account-switch-outline",
  },
  {
    id: "19",
    name: "Dr. Jennifer Lewis",
    location: "Calabar, Cross River State",
    specialty: "Autism Spectrum Disorder",
    icon: "account-group",
  },
  {
    id: "20",
    name: "Dr. Steven Martinez",
    location: "Minna, Niger State",
    specialty: "General Therapy",
    icon: "account-group-outline",
  },
];

const VirtualConsultations = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTherapists = therapistsData.filter(
    (therapist) =>
      therapist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      therapist.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      therapist.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTherapist = ({ item }: { item: Therapist }) => (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <Avatar.Icon size={48} icon={item.icon} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>{item.location}</Text>
          <Text style={styles.details}>{item.specialty}</Text>
        </View>
        <IconButton
          icon={() => <Icon name="phone" color="#007bff" size={24} />}
          onPress={() => console.log(`Calling ${item.name}`)}
        />
        <IconButton
          icon={() => <Icon name="video" color="#28a745" size={24} />}
          onPress={() => console.log(`Video calling ${item.name}`)}
        />
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Find Your Therapist</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name, location, or specialty"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredTherapists}
        keyExtractor={(item) => item.id}
        renderItem={renderTherapist}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.calendarButton}>
        <Link href="/Calendar">
          <Icon name="calendar" color="#007bff" size={32} />
        </Link>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    padding: 16,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "Poppins-SemiBold",
    marginBottom: 16,
    color: "#333",
    textAlign: "center",
  },
  searchBar: {
    fontFamily: "Poppins-Regular",
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 8,
    fontSize: 12,
    marginBottom: 16,
    borderColor: "#DDD",
    borderWidth: 1,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    // fontWeight: "bold",
    color: "#333",
  },
  details: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#777",
  },
  calendarButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#FFF",
    borderRadius: 50,
    padding: 16,
    elevation: 4,
  },
});

export default VirtualConsultations;
