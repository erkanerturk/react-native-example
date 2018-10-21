import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
      <View>
        <View style={styles.deleteButton}>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <Icon size={30} name="ios-trash" color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 22,
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
  deleteButton: {
    alignItems: 'center',
  },
});

export default placeDetail;
