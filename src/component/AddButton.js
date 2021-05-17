import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'
import colors from '../utils/colors';

const AddButton = (props) => {

  return (
    <TouchableOpacity style={styles.container}>
      <Icons size={24} name={'add'} color={colors.themeColor}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 10
  }
})

export default AddButton;
