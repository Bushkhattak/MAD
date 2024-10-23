import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const doctors = [
  { name: "Dr. John Smith", specialty: "Dermatologist", rating: "⭐ 4.9", image: "https://via.placeholder.com/150" },
  { name: "Dr. Anna Dinn", specialty: "Psychologist", rating: "⭐ 4.9", image: "https://via.placeholder.com/150" },
  { name: "Dr. Angela Rayez", specialty: "Therapist", rating: "⭐ 4.8", image: "https://via.placeholder.com/150" },
  { name: "Dr. Chris Bronte", specialty: "Dentist", rating: "⭐ 5.0", image: "https://via.placeholder.com/150" },
];

const App = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search conditions, doctors..."
      />
      <Text style={styles.heading}>Let's find your doctor</Text>
      <View style={styles.grid}>
        {doctors.map((doctor, index) => (
          <View style={styles.doctorCard} key={index}>
            <Image
              style={styles.doctorImage}
              source={{ uri: doctors.image }}
            />
            <View>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
              <Text style={styles.doctorRating}>{doctor.rating}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 3,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  doctorCard: {
    width: '48%', // Almost half the width for two in a row
    aspectRatio: 1, // Keeps the height equal to width, making it square
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 15,
  },
  doctorImage: {
    width: '100%', // Full width of the card
    height: '60%', // Proportional height
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover', // Ensures the image covers the area without distortion
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
  },
  doctorRating: {
    fontSize: 14,
    color: '#FFA500',
  },
});

export default App;