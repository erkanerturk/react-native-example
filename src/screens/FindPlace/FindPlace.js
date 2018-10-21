import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => place.key === key);

    this.props.navigator.push({
      screen: 'awesome-places.PlaceDetailScreen',
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace,
      },
    });
  };

  render() {
    return (
      <View>
        <Text>On Find Place Screen</Text>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  places: state.places.places,
});

export default connect(mapStateToProps)(FindPlaceScreen);
