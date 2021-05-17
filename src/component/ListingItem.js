import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../utils/colors'
import {useNavigation} from '@react-navigation/native'

const ListingItem = (props) => {
  const Navigation = useNavigation()
  const {data} = props

  const onItemPressed = () => {
    Navigation.navigate('DetailScreen', {id: data.id})
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onItemPressed}>
      <View style={styles.imageContainer}/>
      <View style={styles.nameContainer}>
        <Text>{data?.firstName} {data?.lastName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  nameContainer: {
    justifyContent: 'center',
    padding: 5
  },
  imageContainer: {
    backgroundColor: colors.themeColor,
    height: 50,
    width: 50,
    borderRadius: 50
  }
})

export default ListingItem;
