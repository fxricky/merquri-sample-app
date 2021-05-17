import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Feather'
import colors from '../utils/colors';

const SearchButton = (props) => {

  return (
    <TouchableOpacity style={styles.container}>
      <Icons size={24} name={'search'} color={colors.themeColor}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  }
})

export default SearchButton;
